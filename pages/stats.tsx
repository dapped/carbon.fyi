import Banner from "components/Banner";
import Wrapper from "components/Wrapper";
import Border from "components/Border";
import Logo from "components/Logo";

export default function Stats() {
  return (
    <>
      <Banner />
      <main>
        <Wrapper>
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
        </Wrapper>
      </main>
      <Logo />
    </>
  );
}
