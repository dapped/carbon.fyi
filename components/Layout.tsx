import Banner from "./Banner";
import Main from "./Main";
import Footer from "./Footer";

export default function Layout(props: { children?: any }) {
  const stats = {
    text: "stats",
    link: "/stats",
    color: "#b3e93f",
  };
  const offset = {
    text: "offset",
    link: "/",
    color: "#743ee8",
  };
  const about = {
    text: "about",
    link: "/about",
    color: "#fe7c6f",
  };
  const bannerProps = [stats, offset, about];

  return (
    <>
      <Banner bannerProps={bannerProps} />
      <Main>{props.children}</Main>
      <Footer />
      <style jsx global>{`
        body {
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Open Sans, Helvetica Neue, sans-serif;
          line-height: 1.6;
          margin: 0;
          padding: 0;
        }

        #__next {
          display: flex;
          flex-direction: column;
          min-height: 100vh;
        }
      `}</style>
    </>
  );
}
