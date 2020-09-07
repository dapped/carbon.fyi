import { FC } from "react";

const Main: FC = ({ children }) => (
  <main>
    {children}
    <style jsx>{`
      main {
        flex: auto;
        align-self: center;
        width: 100%;
        max-width: 80rem;
      }
    `}</style>
  </main>
);

export default Main;
