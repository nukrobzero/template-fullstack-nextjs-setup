import { useSession, signIn } from "next-auth/react";
import { useRouter } from "next/router";

export default function Login() {
  const { data: session, status } = useSession();
  const router = useRouter();

  if (status === "loading") {
    return <div>Loading...</div>;
  }
  if (!session) {
    signIn();
    return null;
  } else {
    router.push("/dashboard");
  }
  return <></>;
}
