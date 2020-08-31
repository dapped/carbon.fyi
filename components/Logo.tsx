export default function Logo() {
  return (
    <>
      <img
        src="../images/powered_by_offsetra.png"
        alt="Powered by Offsetra"
        width="150px"
      />
      <style jsx>{`
        img {
          position: fixed;
          right: 0;
          bottom: 0;
        }
      `}</style>
    </>
  );
}
