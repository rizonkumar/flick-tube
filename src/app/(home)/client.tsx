"use client";

import { trpc } from "@/trpc/client";

export const PageClient = () => {
  const [data] = trpc.hello.useSuspenseQuery({ text: "Rizon" });
  return <div>Page Client : {data.greeting}</div>;
};
