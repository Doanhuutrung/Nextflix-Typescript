import Image from "next/image";
import { ReactNode } from "react";
import Background from "../../public/login_background.jpg";
import Logo from "../../public/netflix_logo.svg";

export default function AuthLayout({ children }: { children: ReactNode }) {
  return (
    <div className="relative flex h-screen w-screen flex-col bg-black md:items-center md:justify-center md:bg-transparent">
      <Image
        src={Background}
        alt="background"
        className="hidden sm:flex sm:object-cover -z-10"
        priority
        fill
      />
      <Image
        src={Logo}
        alt="background"
        width={120}
        height={120}
        className="absolute left-4 top-4 object-contain md:left-10 md:top-6"
      />
      {children}
    </div>
  );
}
