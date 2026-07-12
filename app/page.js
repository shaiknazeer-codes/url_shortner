import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="bg-purple-100 ">
      <section className="grid grid-cols-1 md:grid-cols-2 items-center min-h-[60vh] mx-6 md:mx-20 gap-8 md:gap-0 py-10 md:py-0">

        
        <div className="text-black">
          <h1 className="font-bold text-2xl md:text-4xl text-center ">
            The Best URL Shortener in the Market
          </h1>

          <p className="  my-5 font-bold mx-4 md:mx-20 text-sm md:text-base ">
            Transform your long and messy URLs into short, clean, and shareable
            links in just one click. SnapLink is fast, secure, and designed to
            simplify the way you share links online.
          </p>

          <Link href="/Shorten " className="text-center block">
            <button className="bg-purple-600 rounded-lg shadow-lg px-4 py-2 font-bold text-white mx-auto md:mx-[30%] block">
              Try Now
            </button>
          </Link>
        </div>

        
        <div className="flex justify-center">
          <Image
            src="/image.jpeg"
            alt="URL Shortener"
            width={500}
            height={500}
            className="w-full md:w-auto h-auto"
          />
        </div>

      </section>
    </div>
  );
}