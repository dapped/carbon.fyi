import { colors } from "lib/theme";

export default function Border(props: { children?: any }) {
  return (
    <div>
      {props.children}
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
}
