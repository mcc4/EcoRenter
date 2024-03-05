"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";

const Logo = () => {
  const router = useRouter();

  return (
    <>
      <Image
        onClick={() => router.push("/")}
        className="hidden md:block cursor-pointer"
        src="/images/logo-desktop-ecorenter.png"
        width={200}
        height={50}
        alt="Logo"
      />
      <Image
        onClick={() => router.push("/")}
        className="block md:hidden cursor-pointer"
        src="/images/logo-mobile-ecorenter.svg"
        width={50}
        height={50}
        alt="Logo"
      />
    </>
  );
};

export default Logo;
