"use client";

import { SessionProvider } from "next-auth/react";
import LoginButton from "@/components/example/login-button";

export default function Home() {
  return (
    <SessionProvider>
      <div>
        <h1 className="font-inter">Hallo world</h1>
        <LoginButton />
      </div>
    </SessionProvider>
  );
}
