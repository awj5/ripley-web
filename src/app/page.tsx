import Image from "next/image";
import { Mail } from "lucide-react";
import "./home.css";

export default function Home() {
  return (
    <main className="relative m-auto flex h-full min-h-96 max-w-lg flex-col items-center justify-center gap-8 px-8">
      <h1 className="w-full">
        <Image src="img/logo.svg" alt="Ripley" width={256} height={94.21} className="w-full" priority />
      </h1>

      <h2 className="w-52 text-center text-lg font-medium text-white md:w-full">
        Local Favorites Curated by Elite Hotels
      </h2>

      <a
        href="mailto:support@ripley.app"
        className="absolute bottom-8 flex items-center gap-2 text-ripleyyellow hover:opacity-50 active:opacity-25"
      >
        <Mail size={24} /> Email support
      </a>
    </main>
  );
}
