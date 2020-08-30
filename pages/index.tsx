import Head from "next/head";
import Link from "next/link";

const Home: React.FC = () => (
  <>
    <Head>
      <title>Calculate ETH Emissions | carbon.fyi</title>
    </Head>

    <ul className="Sections">
      <li className="Sections-item">
        <Link href="/stats">
          <a className="Sections-link Sections-link--stats">stats</a>
        </Link>
      </li>

      <li className="Sections-item">
        <Link href="/offset">
          <a className="Sections-link Sections-link--offset">offset</a>
        </Link>
      </li>

      <li className="Sections-item">
        <Link href="/about">
          <a className="Sections-link Sections-link--about">about</a>
        </Link>
      </li>
    </ul>
  </>
);

export default Home;
