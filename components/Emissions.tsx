import useSWR from "swr";

interface Transaction {
  from: string;
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
        data.result
        <style jsx>{`
          p {
            text-align: center;
          }
        `}</style>
      </p>
    );

  const emittedData = data.result.filter(
    (cur: Transaction) => cur.from === address.toLowerCase()
  );
  const emittedNum = emittedData.length;
  const gas = consumedGas(emittedData);
  const kgco2 = Math.round(gas * kgco2_per_gas);

  return (
    <>
      {emittedNum === 0 ? (
        <p>0 transactions were sent from this address.</p>
      ) : (
        <>
          {emittedNum === 1 ? (
            <>
              <p>1 transaction was sent from this address.</p>
              <p>This transaction consumed {gas} gas.</p>
            </>
          ) : (
            <>
              <p>{emittedNum} transactions were sent from this address.</p>
              <p>These transactions consumed {gas} gas.</p>
            </>
          )}
          <p>
            This emitted the equivalent of {kgco2} kg of CO₂ into the
            atmosphere.
          </p>
          <p>
            Offset this now at{" "}
            <a href="https://www.offsetra.com/">Offsetra.com</a>.
          </p>
          <p>
            Consider offsetting a tonne using{" "}
            <a href="https://commerce.coinbase.com/checkout/092b677f-8217-48be-914d-e5bc266f4d25/">
              cryptocurrency
            </a>
            .
          </p>
        </>
      )}
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
