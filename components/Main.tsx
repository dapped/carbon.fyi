export default function Main(props: { children?: any }) {
  return (
    <main>
      {props.children}
      <style jsx>{`
        main {
          flex: auto;
          align-self: center;
          width: 100%;
          max-width: 50rem;
        }
      `}</style>
    </main>
  );
}
