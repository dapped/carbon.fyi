import Header from "components/Header";
import Border from "components/Border";

export default function Home() {
  const title = "Stats | carbon.fyi";
  const description = "Under construction...";
  return (
    <>
      <Header title={title} description={description} />
      <Border>
        <p>
          Under construction...
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
