import { colors } from "lib/theme";
import { FC } from "react";

const Border: FC = ({ children }) => (
  <div>
    {children}
    <style jsx>{`
      div {
        border: 0.2rem solid ${colors.offsetraPurple};
        border-radius: 1.5rem;
        margin: 1rem 2rem;
        padding: 1rem;
      }
    `}</style>
  </div>
);
export default Border;
