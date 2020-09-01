export default function Border(props: { children?: any }) {
  return (
    <div>
      {props.children}
      <style jsx>{`
        div {
          border: 0.2rem solid #743ee8;
          border-radius: 1.5rem;
          margin: 1rem;
          padding: 1rem;
        }
      `}</style>
    </div>
  );
}
