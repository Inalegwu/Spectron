"use client";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Home() {
  const [hover, setHover] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      if (hover) {
        setHover(false);
      }
    }, 3000);

    return () => {
      clearInterval(interval);
    };
  }, [hover]);

  return (
    <main className="w-full  bg-black px-10 py-10 text-white">
      <div className="fixed z-0 bg-purple-700 rounded-full w-32 h-32 blur-3xl" />
      <section className="w-4/6 mx-auto mt-10 flex flex-col items-center justify-center">
        <h2 className="font-bold text-3xl">Spectron</h2>
        <h4 className="font-bold text-xl text-gray-100">
          The NextJS Starter Kit for{" "}
          <span
            onMouseOver={() => setHover(true)}
            onFocus={() => setHover(true)}
            onMouseLeave={() => setHover(true)}
            className="text-purple-400 cursor-pointer"
          >
            Disgruntled Developers
          </span>
        </h4>
        {hover && (
          <span className="absolute z-10 bg-gray-400/10 w-36 rounded-md p-2 right-40 top-20 text-white text-xs animate-pulse">
            <p className="text-purple-400 italic font-medium">
              Disgruntled Developer
            </p>{" "}
            (n) : Developer who is tired of frameworks and packages turning up
            everywhere and just wants to build cool shit
          </span>
        )}
      </section>
      <div className="w-3/6 mx-auto mt-16 flex flex-col space-y-10 items-start justify-center">
        <div className="flex flex-col items-start justify-start">
          <h2>Genetic Makeup</h2>
          <p className="text-xs text-gray-500 font-medium">
            What pieces make up Spectron
          </p>
        </div>
        <div className="w-full bg-[hsla(0,10%,10%,0.3)] flex flex-col items-start justify-center space-x-4 border-[0.4px] border-[hsla(0,100%,100%,0.2)] rounded-md p-2">
          Next JS
          <section className="flex items-center content-center text-sm text-gray-300">
            The most popular and probably most controversial react framework ,
            designed to help developers ship larger apps faster than ever
            before.
          </section>
        </div>
        <div className="w-full bg-[hsla(0,10%,10%,0.3)] flex flex-col items-start justify-center space-x-4 border-[0.4px] border-[hsla(0,100%,100%,0.2)] rounded-md p-2">
          Drizzle ORM and Kit
          <section className="flex items-center content-center text-sm text-gray-300">
            The typescript orm from the future (imo).An ORM that allows all your
            code to exist in typescript and doesn't require a generation step ,
            go from schema to query instantly
          </section>
        </div>
        <div className="w-full bg-[hsla(0,10%,10%,0.3)] flex flex-col items-start justify-center space-x-4 border-[0.4px] border-[hsla(0,100%,100%,0.2)] rounded-md p-2">
          Lucia-Auth
          <section className="flex items-center content-center text-sm text-gray-300">
            Simple auth solutions for developers who are either tired of being
            sold kinde-auth or clerk-auth and want to roll their own , or
            developers who have constraints that don't allow for third party
            auth services
          </section>
        </div>
        <div className="w-full bg-[hsla(0,10%,10%,0.3)] flex flex-col items-start justify-center space-x-4 border-[0.4px] border-[hsla(0,100%,100%,0.2)] rounded-md p-2">
          TailwindCSS
          <section className="flex items-center content-center text-sm text-gray-300">
            <p>
              Reusable and composable CSS classes , paired with{" "}
              <Link
                href="https://cva.style"
                className="mr-1 underline text-purple-700/40"
                target="_blank"
              >
                CVA
              </Link>
              to provide amazing styling experiences from the solo hacker to the
              full blown team.
            </p>
          </section>
        </div>
      </div>
      <div className="flex flex-col mt-16 items-center justify-center space-y-2">
        <h5>Auth Routes</h5>
        <div className="flex items-center justify-center space-x-5">
          <Link href="/signup">Sign Up</Link>
          <Link href="/login">Login In</Link>
        </div>
      </div>
    </main>
  );
}
