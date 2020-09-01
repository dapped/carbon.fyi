import Banner from "components/Banner";
import Wrapper from "components/Wrapper";
import Border from "components/Border";
import Logo from "components/Logo";

export default function About() {
  return (
    <>
      <Banner />
      <main>
        <Wrapper>
          <Border>
            <p>
              Powered by offsetra. Source code hosted on{" "}
              <a href="https://github.com/Offsetra/carbon.fyi/">GitHub</a>.
              <style jsx>{`
                p {
                  text-align: center;
                }
              `}</style>
            </p>
          </Border>
        </Wrapper>
      </main>
      <Logo />
    </>
  );
}
