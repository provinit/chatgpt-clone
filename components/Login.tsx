"use client";
import { signIn } from "next-auth/react";
import Image from "next/image";

const Login = () => {
  return (
    <div className="bg-[#11A37F] h-screen flex flex-col items-center justify-center text-center">
      <Image
        src="/chatgpt_login.png"
        width={300}
        height={300}
        alt="logo"
      />
      <button onClick={() => signIn("google")} className="text-gray-600 font-bold text-2xl animate-pulse flex space-x-4 bg-white p-4"> <Image
        src="/google_logo.svg"
        width={30}
        height={30}
        alt="google logo"
      /><p>Sign In with Google</p>
      </button>
    </div>
  )
}

export default Login