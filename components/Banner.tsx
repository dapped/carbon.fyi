import Link from "next/link";
import { FC } from "react";
import { colors } from "lib/theme";

const Banner: FC = () => (
  <nav>
    <ul>
      <ListItem href="/stats" color={colors.pear}>
        stats
      </ListItem>
      <ListItem href="/" color={colors.offsetraPurple}>
        offset
      </ListItem>
      <ListItem href="/about" color={colors.salmon}>
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
      <Link href={href}>
        <a>{children}</a>
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

        a:hover,
        a:focus {
          color: ${color};
          background: white;
        }
      `}</style>
    </li>
  );
};
export default Banner;
