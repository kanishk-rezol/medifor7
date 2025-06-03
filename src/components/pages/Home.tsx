
import { Globe } from "@/components/magicui/globe";
import React from "react";
import Image from "next/image";
import { FlipWords } from "../ui/flip-words";
import { PointerHighlight } from "@/components/ui/pointer-highlight";
import { AnimatedTestimonials } from "@/components/ui/animated-testimonials";

export default function Home() {
  const words = ["better", "cute", "beautiful", "modern"];
   const testimonials = [
    {
      quote:
        "Be sure you put your feet in the right place, then stand firm.",
      name: "Abraham Lincoln",
      designation: "16th U.S. President",
      src: "/photos/abh.png",
    },
    {
      quote:
        "Love the life you live. live the life you love",
      name: "Bob Marley",
      designation: "Jamaican singer-songwriter and guitarist",
      src: "/photos/bob.png",
    },
    {
      quote:
        "Life is like riding a bicycle. To keep your balance you must keep moving.",
      name: "Albert Einstein",
      designation: "Theoretical physicist",
      src: "/photos/albert.png",
    },
    {
      quote:
        "Yesterday is not ours to recover, but tomorrow is ours to win or lose.",
      name: "lyndon b jackson",
      designation: "36th U.S. President",
      src: "/photos/leon.png",
    },
    {
      quote:
        "Keep your face always toward the sunshine - and shadows will fall behind you.",
      name: "Lisa Thompson",
      designation: "American poet and essayist",
      src: "/photos/wal.png",
    },
  ];
  return (
    <section id="home">
      <div className="relative flex h-screen items-center justify-center overflow-hidden bg-background px-8 pt-8 pb-40 md:px-20 md:pb-60">
        <span className="mb-72 pointer-events-none whitespace-pre-wrap bg-gradient-to-b from-black to-gray-300/80 bg-clip-text text-center text-6xl font-semibold leading-none text-transparent dark:from-white dark:to-slate-900/10">
          Joyora7
        </span>
        <Globe className="top-28 mt-24" />
        <div className="hidden lg:block absolute left-40 top-1/2 -translate-y-1/2 text-left text-4xl font-normal text-neutral-600 dark:text-neutral-400">
          Build <FlipWords words={words} /> <br />
          life and share it with others
        </div>
        <div className="block lg:hidden absolute left-20 top-[75%] -translate-y-1/2 text-left text-4xl font-normal text-neutral-600 dark:text-neutral-400">
          Build <FlipWords words={words} /> <br />
          websites with Aceternity 
        </div>
      </div>
      <div className="flex items-center justify-between  px-8 pb-24 md:px-20">
          <div className="flex items-center justify-center lg:justify-start gap-2 text-2xl font-bold tracking-tight md:text-4xl text-neutral-600 dark:text-neutral-400">
            <span>Empowering Every Step</span>
            <PointerHighlight>
              <span>Toward a Better Life</span>
            </PointerHighlight>
          </div>
          <div className="flex justify-center">
           <AnimatedTestimonials testimonials={testimonials} />
           </div>
        </div>
\
    </section>
  );
}
