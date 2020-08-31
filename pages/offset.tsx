import { useRouter } from "next/router";
import Banner from "components/Banner";
import Wrapper from "components/Wrapper";
import Border from "components/Border";
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
        <Border>
          <main>{address ? <Emissions address={address} /> : <Input />}</main>
        </Border>
      </Wrapper>
      <Logo />
    </>
  );
}
