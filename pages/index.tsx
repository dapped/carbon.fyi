import Head from "next/head"
import { useRouter } from "next/router"

const Emissions: React.FC<{ address: string }> = ({ address }) => (
  <p>Emissions by <em>{address}</em>:</p>
)

const Form: React.FC = () => (
  <form>
    <label>Address:
      <input type="text" name="a"></input>
    </label>
  </form>
)

const Home: React.FC = () => {
  const router = useRouter();
  const address = router.query.a;
  return (
    <>
      <Head>
        <title>Calculate ETH Emissions | carbon.fyi</title>
      </Head>

      <main>
        <h1>
          Calculate ETH Emissions
        </h1>

        { address ? <Emissions address={ address.toString() } /> : <Form /> }
      </main>

      <footer>
        <p>
          <a href="https://gitlab.com/de-souza/carbon.fyi/">In progress</a>
        </p>
      </footer>
    </>
  )
}

export default Home
