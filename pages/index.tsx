import Menu from "components/Menu";
import About from "components/svg/About";

const statsProps = {
  text: "stats",
  link: "/stats",
  color: "#b3e93f",
  svg: About,
};

const offsetProps = {
  text: "offset",
  link: "/offset",
  color: "#743ee8",
  svg: About,
};

const aboutProps = {
  text: "about",
  link: "/about",
  color: "#fe7c6f",
  svg: About,
};

export default function Home() {
  return <Menu itemProps={[statsProps, offsetProps, aboutProps]} />;
}
