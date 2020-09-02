import { useRouter } from "next/router";
import Border from "components/Border";
import Emissions from "components/Emissions";
import Input from "components/Input";

export default function Home() {
  const router = useRouter();
  const query = router.query.a?.toString();
  return <Border>{query ? <Emissions address={query} /> : <Input />}</Border>;
}
