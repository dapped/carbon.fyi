import MenuItem, { MenuItemProps } from "components/MenuItem";

interface MenuProps {
  menuItemsProps: MenuItemProps[];
}

export default function Menu({ menuItemsProps }: MenuProps) {
  const menuItems = menuItemsProps.map(({ text, link, color }) => (
    <MenuItem key={text} text={text} link={link} color={color} />
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
