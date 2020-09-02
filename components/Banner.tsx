import Link from "next/link";

interface ItemProps {
  text: string;
  link: string;
  color: string;
}

export default function Banner({ bannerProps }: { bannerProps: ItemProps[] }) {
  const createItem = ({ ...itemProps }: ItemProps) => <Item {...itemProps} />;
  const items = bannerProps.map(createItem);
  return (
    <nav>
      <ul>{items}</ul>
      <style jsx>{`
        ul {
          list-style: none;
          display: flex;
          flex-flow: wrap;
          margin: 0;
          padding: 0;
        }
      `}</style>
    </nav>
  );
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
          color: white;
          background: ${color};
          text-decoration: none;
          font-size: 1.25rem;
          font-weight: bold;
          display: flex;
          justify-content: center;
          padding: 0.5rem 1rem;
        }

        a:hover {
          color: ${color};
          background: white;
        }
      `}</style>
    </li>
  );
}