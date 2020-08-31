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
              Open source project hosted on <a href="https://github.com/Offsetra/carbon.fyi/">GitHub</a>.
            </p>
          </Border>
        </Wrapper>
      </main>
      <Logo />
    </>
  );
}
