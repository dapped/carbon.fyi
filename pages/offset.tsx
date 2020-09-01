import { useRouter } from "next/router";
import Banner from "components/Banner";
import Border from "components/Border";
import Emissions from "components/Emissions";
import Input from "components/Input";
import Logo from "components/Logo";
import Wrapper from "components/Wrapper";

export default function Offset() {
  const router = useRouter();
  const address = router.query.a?.toString();
  return (
    <>
      <Banner />
      <main>
        <Wrapper>
          <Border>
            {address ? <Emissions address={address} /> : <Input />}
          </Border>
        </Wrapper>
      </main>
      <Logo />
    </>
  );
}
