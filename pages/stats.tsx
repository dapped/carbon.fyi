import { useRouter } from "next/router";
import Border from "components/Border";

export default function Home() {
  const router = useRouter();
  const query = router.query.a?.toString();
  return (
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
  );
}
