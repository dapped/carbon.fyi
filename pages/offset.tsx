import { useRouter } from "next/router";
import Emissions from "components/Emissions"
import Input from "components/Input"

export default function Offset() {
  const router = useRouter();
  const address = router.query.a?.toString();

  return (
    <>
      <main>{address ? <Emissions address={address} /> : <Input />}</main>

      <footer>
        <p>
          <a href="https://github.com/Offsetra/carbon.fyi/">source code</a>
        </p>
      </footer>
    </>
  );
};
