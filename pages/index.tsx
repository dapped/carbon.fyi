import Head from "next/head";
import { useRouter } from "next/router";
import useSWR from "swr";
import { cursorTo } from "readline";

const KGCO2_PER_GAS = 0.0003100393448;
const API_URL =
  "https://api.etherscan.io/api?module=account&action=txlist&startblock=0&endblock=99999999&sort=asc&apikey=YourApiKeyToken&address=";

interface Transaction {
  from: string;
  gas: number;
}

const fetcher = (url: string) => fetch(url).then((res) => res.json());

const gasSum = (acc: number, cur: Transaction) => acc + Number(cur.gas);

const getGas = (res: Array<Transaction>) => res.reduce(gasSum, 0);

const Emissions: React.FC<{ address: string }> = ({ address }) => {
  const { data, error } = useSWR(API_URL + address, fetcher);

  if (error) return <p>Error fetching data.</p>;
  if (!data) return <p>Fetching data...</p>;
  if (data.status == 0) return <p>{data.result}</p>;

  const sent = data.result.filter((cur: Transaction) => cur.from == address);
  const gas = getGas(sent);

  return (
    <>
      <p>
        {sent.length} transactions were sent using <em>{address}</em>.
      </p>
      <p>These transactions consumed {gas} gas.</p>
      <p>
        This emitted the equivalent of {Math.round(gas * KGCO2_PER_GAS)} kg of
        CO₂ in the atmosphere.
      </p>
    </>
  );
};

const Form: React.FC = () => (
  <form>
    <label>
      Please enter an ETH address:
      <input type="text" name="a"></input>
    </label>
  </form>
);

const Home: React.FC = () => {
  const router = useRouter();
  const address = router.query.a;

  return (
    <>
      <Head>
        <title>Calculate ETH Emissions | carbon.fyi</title>
      </Head>

      <main>
        {address ? (
          <Emissions address={address.toString().toLowerCase()} />
        ) : (
          <Form />
        )}
      </main>

      <footer>
        <p>
          <a href="https://gitlab.com/de-souza/carbon.fyi/">source code</a>
        </p>
      </footer>
    </>
  );
};

export default Home;
