import Link from "next/link";

export default function Home() {
  return (
    <main className="w-full  bg-black px-10 py-10 text-white">
      <div className="absolute z-0 bg-purple-700 rounded-full w-32 h-32 blur-3xl" />
      <section className="w-4/6 mx-auto mt-10 flex flex-col items-center justify-center">
        <h2 className="font-bold text-3xl">Spectron</h2>
        <h4 className="font-bold text-xl text-gray-100">
          The NextJS Starter Kit for Disgruntled Developers
        </h4>
      </section>
      <div className="w-3/6 mx-auto mt-16 flex flex-col space-y-10 items-start justify-center">
        <h2>Genetic Makeup</h2>
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
    </main>
  );
}
