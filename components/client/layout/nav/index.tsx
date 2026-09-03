
import Link from "next/link";
import NavLinks from "./links";
import AuthSection from "@/components/common/ui/auth.section";

const NavBar = () => {
  return (
    <header className="sticky top-0 z-50 border-b border-gray-100 bg-white">
      <div className="flex h-20 w-full items-center justify-between px-6 lg:px-10">

        {/* ================= LOGO ================= */}
        <Link href="/" className="group shrink-0">
          <div className="flex items-center gap-3">

            {/* Logo Icon */}
            <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gray-900 text-sm font-black text-white shadow-md transition-transform duration-300 group-hover:scale-105">
              NP
            </div>

            {/* Logo Text */}
            <div className="leading-none">
              <h1 className="text-xl font-black tracking-tight text-gray-900">
                Nepali Pasal
              </h1>

              <p className="mt-1 text-[9px] font-bold uppercase tracking-[0.25em] text-gray-400">
                Everyday essentials
              </p>
            </div>

          </div>
        </Link>

        {/* ================= NAVIGATION ================= */}
        <div className="hidden flex-1 justify-center md:flex">
          <NavLinks />
        </div>

        {/* ================= RIGHT SIDE ================= */}
        <div className="shrink-0">
          <AuthSection />
        </div>

      </div>
    </header>
  );
};

export default NavBar;


