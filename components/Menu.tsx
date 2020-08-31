import Link from "next/link";

interface ItemProps {
  text: string;
  link: string;
  color: string;
  svg: React.ComponentType;
}

interface MenuProps {
  itemProps: ItemProps[];
}

export default function Menu({ itemProps }: MenuProps) {
  const menuItems = itemProps.map(({ text, link, color, svg }) => (
    <MenuItem key={text} text={text} link={link} color={color} svg={svg} />
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

function MenuItem(props: ItemProps) {
  return (
    <>
      <li>
        <Link href={props.link}>
          <a>
            {props.text}
            {/* <props.svg /> */}
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
          display: flex;
          flex-flow: column;
          align-items: center;
          justify-content: center;
          height: 100%;
          background: ${props.color};
        }

        a:hover {
          background: white;
          color: ${props.color};
        }
      `}</style>
    </>
  );
}
