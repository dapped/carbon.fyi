import Banner from "components/Banner";
import Main from "components/Main";
import Footer from "components/Footer";
import { FC } from "react";

const Layout: FC = ({ children }) => (
  <>
    <Banner />
    <Main>{children}</Main>
    <Footer />
    <style jsx global>{`
      html {
        font-size: 62.5%;
      }

      body {
        font: 1.6rem/1.6 -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
          Ubuntu, Cantarell, Open Sans, Helvetica Neue, sans-serif;
        margin: 0;
        padding: 0;
      }

      #__next {
        display: flex;
        flex-flow: column;
        min-height: 100vh;
      }
    `}</style>
  </>
);
export default Layout;
