import { useRouter } from "next/router";
import Border from "components/Border";

export default function Home() {
  const router = useRouter();
  const query = router.query.a?.toString();
  return (
    <Border>
      <p>
        Powered by <a href="https://www.offsetra.com/">Offsetra</a>. Source code
        on <a href="https://github.com/Offsetra/carbon.fyi/">GitHub</a>.
        <style jsx>{`
          p {
            text-align: center;
          }
        `}</style>
      </p>
    </Border>
  );
}
