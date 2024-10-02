import Image from "next/image";
import { Mail } from "lucide-react";

export default function Home() {
  return (
    <main className="h-full justify-center items-center flex flex-col px-8 max-w-lg m-auto min-h-96 gap-8 relative">
      <h1 className="w-full">
        <Image src="img/logo.svg" alt="Ripley" width={256} height={94.21} className="w-full" priority />
      </h1>

      <h2 className="text-xl font-medium text-center w-56 md:w-full">Local Favorites Curated by Elite Hotels</h2>

      <a
        href="mailto:support@ripley.app"
        className="text-ripleyyellow hover:opacity-50 active:opacity-25 flex items-center gap-2 absolute bottom-8"
      >
        <Mail size={24} /> Email support
      </a>
    </main>
  );
}
