export default function Logo() {
  return (
    <a href="https://www.offsetra.com/">
      <img src="../images/powered_by_offsetra.png" alt="Powered by Offsetra" />
      <style jsx>{`
        img {
          position: fixed;
          right: 1rem;
          bottom: 1rem;
          width: 10rem;
        }
      `}</style>
    </a>
  );
}
