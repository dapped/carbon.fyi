export default function Wrapper(props: { children?: any }) {
  return (
    <div className="wrapper">
      <div className="padding">{props.children}</div>
      <style jsx>{`
        .wrapper {
          max-width: 50rem;
          margin: auto;
        }

        .padding {
          padding: 0 1rem;
        }
      `}</style>
    </div>
  );
}
