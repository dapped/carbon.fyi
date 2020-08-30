import Link from "next/link";

export interface MenuItemProps {
  text: string;
  link: string;
  color: string;
}

export default function MenuItem(props: MenuItemProps) {
  return (
    <>
      <li>
        <Link href={props.link}>
          <a>{props.text}</a>
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
