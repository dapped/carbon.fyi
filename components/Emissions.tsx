import useSWR from "swr";

interface Transaction {
  from: string;
  to: string;
  gas: number;
}

export default function Emissions({ address }: { address: string }) {
  const kgco2_per_gas = 0.0003100393448;
  const api_key = process.env.NEXT_PUBLIC_API_KEY;
  const api_url = `https://api.etherscan.io/api?module=account&action=txlist&address=${address}&startblock=0&endblock=99999999&sort=asc&apikey=${api_key}`;
  const { data, error } = useSWR(api_url, fetcher);

  if (error)
    return (
      <p>
        Error fetching data.
        <style jsx>{`
          p {
            text-align: center;
          }
        `}</style>
      </p>
    );

  if (!data)
    return (
      <p>
        Fetching data...
        <style jsx>{`
          p {
            text-align: center;
          }
        `}</style>
      </p>
    );

  if (data.status === "0")
    return (
      <p>
        {data.result}
        <style jsx>{`
          p {
            text-align: center;
          }
        `}</style>
      </p>
    );

  const outgoingData = data.result.filter(
    (cur: Transaction) => cur.from === address.toLowerCase()
  );
  const outgoingNum = outgoingData.length;
  const outgoingGas = consumedGas(outgoingData);
  const outgoingKgco2 = Math.round(outgoingGas * kgco2_per_gas);

  const incomingData = data.result.filter(
    (cur: Transaction) => cur.to === address.toLowerCase()
  );
  const incomingNum = incomingData.length;
  const incomingGas = consumedGas(incomingData);
  const incomingKgco2 = Math.round(incomingGas * kgco2_per_gas);

  return (
    <>
      {outgoingNum === 0 ? (
        <p>0 transactions were sent from this address.</p>
      ) : outgoingNum === 1 ? (
        <p>
          1 transaction was sent from this address, consuming {outgoingGas} gas
          and emitting the equivalent of {outgoingKgco2} kg of CO₂ into the
          atmosphere.
        </p>
      ) : (
        <p>
          {outgoingNum} transactions were sent from this address, consuming{" "}
          {outgoingGas} gas and emitting the equivalent of {outgoingKgco2} kg of
          CO₂ into the atmosphere.
        </p>
      )}
      {incomingNum === 0 ? (
        <p>0 transactions were sent from this address.</p>
      ) : incomingNum === 1 ? (
        <p>
          1 transaction was received by this address, consuming {incomingGas}{" "}
          gas and emitting the equivalent of {incomingKgco2} kg of CO₂ into the
          atmosphere.
        </p>
      ) : (
        <p>
          {incomingNum} transactions were received by this address, consuming{" "}
          {incomingGas} gas and emitting the equivalent of {incomingKgco2} kg of
          CO₂ into the atmosphere.
        </p>
      )}
      <p>
        Offset this now at <a href="https://www.offsetra.com/">Offsetra.com</a>.
      </p>
      <p>
        Consider offsetting a tonne using{" "}
        <a href="https://commerce.coinbase.com/checkout/092b677f-8217-48be-914d-e5bc266f4d25/">
          cryptocurrency
        </a>
        .
      </p>
      <style jsx>{`
        p {
          text-align: center;
        }
      `}</style>
    </>
  );
}

async function fetcher(url: string) {
  const res = await fetch(url);
  return await res.json();
}

function consumedGas(res: Transaction[]) {
  return res.reduce(gasSum, 0);
}

function gasSum(acc: number, cur: Transaction) {
  return acc + Number(cur.gas);
}
