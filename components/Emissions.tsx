import useSWR from "swr";

const API_KEY = process.env.NEXT_PUBLIC_API_KEY;
const KGCO2_PER_GAS = 0.0003100393448;

interface EmissionsProps {
  address: string;
}

interface TransactionData {
  from: string;
  gas: number;
}

export default function Emissions({ address }: EmissionsProps) {
  const api_url = `https://api.etherscan.io/api?module=account&action=txlist&address=${address}&startblock=0&endblock=99999999&sort=asc&apikey=${API_KEY}`;
  const { data, error } = useSWR(api_url, fetcher);

  if (error) return <p>Error fetching data.</p>;
  if (!data) return <p>Fetching data...</p>;
  if (data.status == 0) return <p>{data.result}</p>;

  const sent = data.result.filter(
    (cur: TransactionData) => cur.from == address.toLowerCase()
  );

  const transactions = sent.length;
  const gas = getGas(sent);
  const kgco2 = Math.round(gas * KGCO2_PER_GAS);

  return (
    <>
      <p>
        {transactions} transactions were sent from <em>{address}</em>.
      </p>
      <p>These transactions consumed {gas} gas.</p>
      <p>
        This emitted the equivalent of {kgco2} kg of CO₂ into the atmosphere.
      </p>
      <p>
        Offset this now at <a href="https://www.offsetra.com/">Offsetra.com</a>.
      </p>
    </>
  );
}

async function fetcher(url: string) {
  const res = await fetch(url);
  return await res.json();
}

function gasSum(acc: number, cur: TransactionData) {
  return acc + Number(cur.gas);
}

function getGas(res: Array<TransactionData>) {
  return res.reduce(gasSum, 0);
}
