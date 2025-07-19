"use client";
import Gradient from "@/components/main/Gradient";
import Hero from "@/components/main/Hero";
import Image from "next/image";
import { useEffect, useState } from "react";
import SignedHero from "@/components/main/SignedHero";

export default function Home() {
  return (
    <main className="h-screen">
      <Hero />
    </main>
  );
}
