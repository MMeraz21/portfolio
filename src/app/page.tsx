import Link from "next/link";

import { LatestPost } from "~/app/_components/post";
import { api, HydrateClient } from "~/trpc/server";
import { SiteNav } from "./_components/layout/site-nav";

export default async function Home() {
  const hello = await api.post.hello({ text: "from tRPC" });

  void api.post.getLatest.prefetch();

  return (
    <HydrateClient>
      <main className="flex min-h-screen flex-col items-center bg-red-500 text-black">
        <div className="sticky top-0 py-4 z-50"> {/* Removed w-full and flex justify-center */}
          <SiteNav /> {/* Removed extra div wrapper since we don't need w-fit anymore */}
        </div>
        <div className="flex flex-col gap-8 p-8 -mt-16"> {/* Added negative margin to pull content up */}
          {/* Dummy content sections */}
          {Array.from({ length: 10 }).map((_, i) => (
            <div key={i} className="bg-white p-8 rounded-lg shadow-lg w-[600px]">
              <h2 className="text-2xl font-bold mb-4">Section {i + 1}</h2>
              <p className="mb-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor 
                incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis 
                nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
              </p>
              <p>
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore 
                eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt 
                in culpa qui officia deserunt mollit anim id est laborum.
              </p>
            </div>
          ))}
        </div>
      </main>
    </HydrateClient>
  );
}
