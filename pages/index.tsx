import { useRouter } from "next/router";
import Header from "components/Header";
import Border from "components/Border";
import Emissions from "components/Emissions";
import Input from "components/Input";

export default function Home() {
  const title = "ETH CO2 Emissions | carbon.fyi";
  const description = "How much CO2 is associated with your ETH address?";
  const router = useRouter();
  const query = router.query.a?.toString();
  return (
    <>
      <Header title={title} description={description} />
      <Border>{query ? <Emissions address={query} /> : <Input />}</Border>
    </>
  );
}
