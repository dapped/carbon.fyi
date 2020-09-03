import Header from "components/Header";
import Border from "components/Border";

export default function Home() {
  const title = "About | carbon.fyi";
  const description = "About this website";
  return (
    <>
      <Header title={title} description={description} />
      <Border>
        <p>
          Powered by <a href="https://www.offsetra.com/">Offsetra</a>. Source
          code on <a href="https://github.com/Offsetra/carbon.fyi/">GitHub</a>.
          <style jsx>{`
            p {
              text-align: center;
            }
          `}</style>
        </p>
      </Border>
    </>
  );
}
