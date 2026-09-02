import Image from "next/image";
import Link from "next/link";

const Hero = () => {
  return (
    <section className="relative h-[85vh]">
      {/* Background Image  */}
      <Image
        src="/hero.jpg"
        alt="Glowora beauty products"
        fill
        className="object-cover object-center z-1"
        loading="eager"
      />
      <div className="absolute inset-0 bg-black/40 z-10"></div>

      {/* Navbar + Hero content */}
      <div className="relative z-20">
        <div className="flex min-h-150 items-center px-10">
          <div className="max-w-lg">
            <h1 className="text-4xl font-semibold font-serif leading-tight">
              REVEAL YOUR <br />
              <span className="text-white">NATURAL</span> GLOW
            </h1>

            <p className="mt-5 max-w-md text-text-secondary">
              Discover skincare that enhances your natural beauty. Gentle,
              effective, and made for you.
            </p>

            <Link
              href="/products"
              className="mt-20 inline-block rounded-full bg-primary px-7 py-3 font-medium text-white transition-all duration-200 hover:scale-105 hover:opacity-90"
            >
              Shop Now
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
