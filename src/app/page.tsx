import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Image src="/logo.svg" alt="Logo" width={100} height={100} />
      <p className="text-xl font-semibold -tracking-tight">Flick Tube</p>
    </div>
  );
}
