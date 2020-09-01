import Link from "next/link";

export default function Banner() {
  return (
    <>
      <nav>
        <ul>
          <Item text="stats" link="/stats" color="#b3e93f" />
          <Item text="offset" link="/offset" color="#743ee8" />
          <Item text="about" link="/about" color="#fe7c6f" />
        </ul>
      </nav>
      <style jsx>{`
        ul {
          list-style: none;
          font-size: 1.5rem;
          font-weight: bold;
          line-height: 4rem;
          display: flex;
          margin: 0;
          padding: 0;
        }
      `}</style>
    </>
  );
}

interface ItemProps {
  text: string;
  link: string;
  color: string;
}

function Item({ text, link, color }: ItemProps) {
  return (
    <li>
      <Link href={link}>
        <a>{text}</a>
      </Link>
      <style jsx>{`
        li {
          flex: 1;
        }

        a {
          text-decoration: none;
          color: white;
          background: ${color};
          height: 100%;
          display: flex;
          flex-flow: column;
          align-items: center;
          justify-content: center;
        }

        a:hover {
          color: ${color};
          background: white;
        }
      `}</style>
    </li>
  );
}
