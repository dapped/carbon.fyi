import Menu from "components/Menu";

const statsProps = {
  text: "stats",
  link: "/stats",
  color: "#b3e93f",
};

const offsetProps = {
  text: "offset",
  link: "/offset",
  color: "#743ee8",
};

const aboutProps = {
  text: "about",
  link: "/about",
  color: "#fe7c6f",
};

export default function Home() {
  return <Menu itemProps={[statsProps, offsetProps, aboutProps]} />;
}
