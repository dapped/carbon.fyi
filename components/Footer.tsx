import Logo from "components/Logo";

export default function Footer() {
  return (
    <footer>
      <Logo />
      <style jsx>{`
        footer {
          text-align: right;
          margin: 0 1rem 1rem;
        }
      `}</style>
    </footer>
  );
}
