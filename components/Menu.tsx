import Link from "next/link";

interface MenuProps {
  itemProps: ItemProps[];
}

interface ItemProps {
  text: string;
  link: string;
  color: string;
}

export default function Menu({ itemProps }: MenuProps) {
  const menuItems = itemProps.map(({ text, link, color }) => (
    <Item key={text} text={text} link={link} color={color} />
  ));
  return (
    <>
      <ul>{menuItems}</ul>
      <style jsx>{`
        ul {
          list-style: none;
          font-size: 6vw;
          font-weight: bold;
          display: flex;
          height: 100vh;
          margin: 0;
          padding: 0;
        }

        @media (max-aspect-ratio: 1/1) {
          ul {
            font-size: 16vw;
            flex-flow: column;
          }
        }
      `}</style>
    </>
  );
}

function Item(props: ItemProps) {
  return (
    <>
      <li>
        <Link href={props.link}>
          <a>
            {props.text}
          </a>
        </Link>
      </li>
      <style jsx>{`
        li {
          flex: 1;
        }

        a {
          text-decoration: none;
          color: white;
          background: ${props.color};
          height: 100%;
          display: flex;
          flex-flow: column;
          align-items: center;
          justify-content: center;
        }

        a:hover {
          color: ${props.color};
          background: white;
        }
      `}</style>
    </>
  );
}
