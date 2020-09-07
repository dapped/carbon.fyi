import { colors } from "lib/theme";
import { FC } from "react";

const Border: FC = ({ children }) => (
  <div>
    {children}
    <style jsx>{`
      div {
        border: 0.3rem solid ${colors.offsetraPurple};
        border-radius: 2.4rem;
        margin: 1.6rem 3.2rem;
        padding: 1.6rem;
      }
    `}</style>
  </div>
);
export default Border;
