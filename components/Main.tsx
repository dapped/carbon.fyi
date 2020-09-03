export default function Main(props: { children?: any }) {
  return (
    <main>
      <div className="wrapper">
        <div className="padding">{props.children}</div>
      </div>
      <style jsx>{`
        main {
          flex: auto;
        }

        .wrapper {
          max-width: 50rem;
          margin: auto;
        }

        .padding {
          padding: 0 1rem;
        }
      `}</style>
    </main>
  );
}
