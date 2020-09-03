import useSWR from "swr";

interface Transaction {
  from: string;
  gas: number;
}

export default function Emissions({ address }: { address: string }) {
  const api_key = process.env.NEXT_PUBLIC_API_KEY;
  const api_url = `https://api.etherscan.io/api?module=account&action=txlist&address=${address}&startblock=0&endblock=99999999&sort=asc&apikey=${api_key}`;
  const { data, error } = useSWR(api_url, fetcher);

  let text;
  if (error) text = ["Error fetching data."];
  else if (!data) text = ["Fetching data..."];
  else if (data.status == 0) text = [data.result];
  else text = emissionsText(address, data.result);

  const paragraphs = text.map((paragraph: string) => (
    <>
      <p>{paragraph}</p>
      <style jsx>{`
        p {
          text-align: center;
        }
      `}</style>
    </>
  ));
  return paragraphs;
}

async function fetcher(url: string) {
  const res = await fetch(url);
  return await res.json();
}

function emissionsText(address: string, data: Array<Transaction>) {
  const kgco2_per_gas = 0.0003100393448;

  const emittedData = data.filter(
    (cur: Transaction) => cur.from == address.toLowerCase()
  );
  const emittedNum = emittedData.length;
  const gas = consumedGas(emittedData);
  const kgco2 = Math.round(gas * kgco2_per_gas);

  let text = [];
  if (emittedNum == 0) {
    text.push("0 transactions were sent from this address.");
  } else {
    if (emittedNum == 1) {
      text.push("1 transaction was sent from this address.");
      text.push(`This transaction consumed ${gas} gas.`);
    } else {
      text.push(`${emittedNum} transactions were sent from this address.`);
      text.push(`These transactions consumed ${gas} gas.`);
    }
    text.push(
      `This emitted the equivalent of ${kgco2} kg of CO₂ into the atmosphere.`
    );
  }
  return text;
}

function gasSum(acc: number, cur: Transaction) {
  return acc + Number(cur.gas);
}

function consumedGas(res: Transaction[]) {
  return res.reduce(gasSum, 0);
}
