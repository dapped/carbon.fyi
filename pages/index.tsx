import Menu from "components/Menu";

const menuItemsProps = [
  { text: "stats", link: "/stats", color: "#b3e93f" },
  { text: "offset", link: "/offset", color: "#743ee8" },
  { text: "about", link: "/about", color: "#fe7c6f" },
];

const Home: React.FC = () => <Menu menuItemsProps={menuItemsProps} />;

export default Home;
