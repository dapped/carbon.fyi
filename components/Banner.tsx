import Link from "next/link";
import { FC } from "react";

const Banner: FC = () => (
  <nav>
    <ul>
      <ListItem href="/stats" color="#b3e93f">
        stats
      </ListItem>
      <ListItem href="/" color="#743ee8">
        offset
      </ListItem>
      <ListItem href="/about" color="#fe7c6f">
        about
      </ListItem>
      <style jsx>{`
        ul {
          list-style: none;
          display: flex;
          flex-flow: wrap;
          margin: 0;
          padding: 0;
        }
      `}</style>
    </ul>
  </nav>
);

interface ItemProps {
  href: string;
  color: string;
}
const ListItem: FC<ItemProps> = ({ href, color, children }) => {
  return (
    <li>
      <Link href={href}>{children}</Link>
      <style jsx>{`
        li {
          flex: 1;
        }

        li :global(a) {
          color: white;
          background: ${color};
          text-decoration: none;
          font-size: 1.25rem;
          font-weight: bold;
          display: flex;
          justify-content: center;
          padding: 0.5rem 1rem;
        }

        li :global(a:hover) {
          color: ${color};
          background: white;
        }
      `}</style>
    </li>
  );
};
export default Banner;
