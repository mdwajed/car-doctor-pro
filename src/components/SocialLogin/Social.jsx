import React from "react";
import { signIn, useSession } from "next-auth/react";
import { FaFacebookF } from "react-icons/fa";
import { AiOutlineGithub } from "react-icons/ai";
import { FcGoogle } from "react-icons/fc";
import { useRouter } from "next/navigation";
const Social = () => {
  const router = useRouter();
  const session = useSession();

  const handleSocialLogin = async (provider) => {
    const res = await signIn(provider);
  };
  if (session.status === "authenticated") {
    router.push("/");
  }
  return (
    <div>
      <p className="flex justify-center items-center  gap-6">
        <FaFacebookF className="bg-[#F5F5F8] rounded-full p-3 text-4xl text-[#3B5998]"></FaFacebookF>
        <button onClick={() => handleSocialLogin("github")}>
          <AiOutlineGithub className="bg-[#F5F5F8] rounded-full p-3 text-4xl text-[#3B5998]" />
        </button>
        <button onClick={() => handleSocialLogin("google")}>
          <FcGoogle className="bg-[#F5F5F8] rounded-full p-3 text-4xl" />
        </button>
      </p>
    </div>
  );
};

export default Social;
