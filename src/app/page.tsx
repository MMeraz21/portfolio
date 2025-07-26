import Link from "next/link";

import { LatestPost } from "~/app/_components/post";
import { api, HydrateClient } from "~/trpc/server";
import { SiteNav } from "./_components/layout/site-nav";
import { HomePage } from "./_components/home/home-page";
import { Experience } from "./_components/home/sections/experience";

export default async function Home() {
  const hello = await api.post.hello({ text: "from tRPC" });

  void api.post.getLatest.prefetch();

  return (
    <HydrateClient>
      <main className="flex min-h-screen flex-col items-center bg-[#fbfbf3] text-black">
        <div className="w-full max-w-[100%]"> 
          <HomePage />
        </div>    
        <div className="w-full max-w-[100%]"> 
          <Experience />
        </div>
      </main>
    </HydrateClient>
  );
}
