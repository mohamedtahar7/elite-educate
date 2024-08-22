"use client";
import Gradient from "@/components/main/Gradient";
import Hero from "@/components/main/Hero";
import Image from "next/image";
import { auth, currentUser } from "@clerk/nextjs/server";
import { useEffect, useState } from "react";
import { useUser } from "@clerk/nextjs";
import SignedHero from "@/components/main/SignedHero";

export default function Home() {
  const { isLoaded, isSignedIn, user } = useUser();
  return (
    <main className="h-screen">
      {user ? <SignedHero user={user} /> : <Hero />}
    </main>
  );
}
