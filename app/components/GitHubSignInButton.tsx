"use client";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import GitHub from "../../public/github.svg";
import { signIn } from "next-auth/react";


export default function GitHubSignInButton() {
  return (
    <Button onClick={() => signIn("github")} variant="outline" size="icon">
      <Image src={GitHub} alt="GitHub-icon" className="w-4 h-4" />
    </Button>
  );
}
