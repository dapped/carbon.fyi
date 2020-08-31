export default function Border(props: { children?: any }) {
  return (
    <div>
      {props.children}
      <style jsx>{`
        div {
          border-radius: 1.5rem;
          border: 0.2rem solid #743ee8;
          padding: 1rem;
          margin: 1rem;
        }
      `}</style>
    </div>
  );
}
