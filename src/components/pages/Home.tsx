
import { Globe } from "@/components/magicui/globe";
import React from "react";
import Image from "next/image";
import { FlipWords } from "../ui/flip-words";
import { PointerHighlight } from "@/components/ui/pointer-highlight";


export default function Home() {
  const words = ["better", "cute", "beautiful", "modern"];

  return (
    <section id="home">
      <div className="relative flex h-screen items-center justify-center overflow-hidden bg-background px-8 pt-8 pb-40 md:px-20 md:pb-60">
        <span className="mb-72 pointer-events-none whitespace-pre-wrap bg-gradient-to-b from-black to-gray-300/80 bg-clip-text text-center text-6xl font-semibold leading-none text-transparent dark:from-white dark:to-slate-900/10">
          MediFor7
        </span>
        <Globe className="top-28 mt-24" />
        <div className="hidden lg:block absolute left-40 top-1/2 -translate-y-1/2 text-left text-4xl font-normal text-neutral-600 dark:text-neutral-400">
          Build <FlipWords words={words} /> <br />
          websites with Aceternity UI
        </div>
        <div className="block lg:hidden absolute left-20 top-[75%] -translate-y-1/2 text-left text-4xl font-normal text-neutral-600 dark:text-neutral-400">
          Build <FlipWords words={words} /> <br />
          websites with Aceternity UI
        </div>
      </div>
      <div className="flex flex-col lg:flex-row items-center justify-between gap-12 px-8 pb-24 md:px-20">
        <div className="flex flex-col max-w-3xl text-center lg:text-left">
          <div className="flex items-center justify-center lg:justify-start gap-2 text-2xl font-bold tracking-tight md:text-4xl text-neutral-600 dark:text-neutral-400">
            <span>MediFor7 Your Own</span>
            <PointerHighlight>
              <span>Medication Manager</span>
            </PointerHighlight>
          </div>
          <p className="mt-6 text-xl text-neutral-500 dark:text-neutral-400">
            Our Mission Is To Improve The Lives Of Individuals And Families By Providing A Smart, Reliable, And Affordable Solution For Medication Management.
          </p>
          <div className="flex flex-col lg:flex-row items-center gap-10 mt-10  ">
            <Image src="/photos/image2.png" alt="Logo" width={150} height={150} className=" flex" />
            <p className="flex text-[15px]">Trusted By 1600+ people</p>
          </div>
        </div>
        <div className="w-full max-w-[706px]">
          <Image
            src="/photos/images1.png"
            alt="Logo"
            width={706}
            height={706}
            className="w-full h-auto"
          />
        </div>
      </div>
    </section>
  );
}
