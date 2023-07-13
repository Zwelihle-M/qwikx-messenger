import Image from "next/image";
import QwikxLogo from "../../public/images/qwikx-message-white.png"
import AuthForm from "./components/AuthForm";
export default function Home() {
  return (
    <div className="flex min-h-screen flex-col justify-center py-12 sm:px-6 lg:px-8 bg-graySeven">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">{/* qwikx logo */}
      <Image src={QwikxLogo}  alt="Logo" height={200} width={300} className="mx-auto w-auto" quality={100} priority/>
      <h1 className="mt-6 text-center text-3xl tracking-tight text-white">Sign in to your account</h1>
      </div>

      {/* authentication form */}
      <AuthForm/>
    </div>
  );
}
