import Image from "next/image";
import Navbar from "@/components/navbar";

export default function Home() {
  return(
    <div className="flex min-h-[calc(100vh-4rem)] flex-col bg-white">
      <main className="flex-1">{/*Hero section*/}
        <section className="container mx-auto px-4 py-32">
          <div className="mx-auto max-w-4xl text-center">
            <h1 className="text-black mb-6 text-6xl font-bold">
              Vision M
            </h1>
            <p className="text-gray-700 mb-10 text-xl">
              Especialistas en recubrimiento de pintura
            </p>
          </div>
        </section>
      </main>
    </div>
  );
}
