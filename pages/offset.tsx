import { useRouter } from "next/router";
import Banner from "components/Banner";
import Wrapper from "components/Wrapper";
import Emissions from "components/Emissions";
import Input from "components/Input";
import Logo from "components/Logo";

export default function Offset() {
  const router = useRouter();
  const address = router.query.a?.toString();

  return (
    <>
      <Banner />
      <Wrapper>
        <main>{address ? <Emissions address={address} /> : <Input />}</main>

        <footer>
          <p>
            <a href="https://github.com/Offsetra/carbon.fyi/">source code</a>
          </p>
        </footer>
      </Wrapper>
      <Logo />
    </>
  );
}
