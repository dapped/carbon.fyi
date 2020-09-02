import Logo from "components/Logo";

export default function Footer() {
  return (
    <footer>
      <div>
        <Logo />
      </div>
      <style jsx>{`
        footer {
          text-align: right;
        }

        div {
          margin: 0 1rem 1rem;
        }
      `}</style>
    </footer>
  );
}
