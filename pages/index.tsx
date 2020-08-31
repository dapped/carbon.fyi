import Menu from "components/Menu";

const menuItemsProps = [
  { text: "stats", link: "/stats", color: "#b3e93f" },
  { text: "offset", link: "/offset", color: "#743ee8" },
  { text: "about", link: "/about", color: "#fe7c6f" },
];

export default function Home() {
  return <Menu menuItemsProps={menuItemsProps} />;
}
