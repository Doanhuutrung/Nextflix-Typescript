"use client";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Google from "../../public/google.svg";
import { signIn } from "next-auth/react";


export default function GoogleSignInButton() {
  return (
    <Button onClick={() => signIn("google")} variant="outline" size="icon">
      <Image src={Google} alt="google-icon" className="w-4 h-4" />
    </Button>
  );
}
