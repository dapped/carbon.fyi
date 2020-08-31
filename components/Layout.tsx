export default function Layout(props: { children?: any }) {
  return (
    <>
      {props.children}
      <style jsx global>{`
        body {
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Open Sans, Helvetica Neue, sans-serif;
          line-height: 1.6;
          min-height: 100vh;
          margin: 0;
          padding: 0;
        }
      `}</style>
    </>
  );
}
