"use client";

import Image from "next/image";
import Logo from "../../../public/assets/main-logo.png";
import Link from "next/link";
import { RiMenu3Fill, RiCloseLargeLine } from "react-icons/ri";
import { usePathname } from "next/navigation";
import { useState } from "react";

const Navbar = () => {
  const [showCloseMenu, setShowCloseMenu] = useState(false);

  const pathname = usePathname();

  return (
    <div className="flex relative justify-between items-center py-2">
      <div className="flex items-center gap-x-2">
        <Image
          src={Logo}
          alt="logo"
          width="60"
          height="60"
          className="bg-white rounded-full"
        />
        <p className="font-bold">Coding Activist</p>
      </div>
      <div className="md:flex items-center gap-x-20 hidden relative">
        <Link
          href="/"
          className={`hover:scale-100 duration-500 ${
            pathname === "/" ? "text-[#5E548E]" : "text-white"
          }`}
        >
          Home
        </Link>
        <Link
          href="/jobs"
          className={`hover:scale-100 duration-500 ${
            pathname === "/jobs" ? "text-[#5E548E]" : "text-white"
          }`}
        >
          Jobs
        </Link>
      </div>
      {!showCloseMenu ? (
        <RiMenu3Fill
          className="black md:hidden text-3xl"
          onClick={() => setShowCloseMenu((prev) => !prev)}
        />
      ) : (
        <RiCloseLargeLine
          className="black md:hidden text-3xl"
          onClick={() => setShowCloseMenu((prev) => !prev)}
        >
          Close
        </RiCloseLargeLine>
      )}
      {showCloseMenu && (
        <div className="absolute top-20 bg-white rounded-lg flex flex-col gap-y-2 px-9 py-5 justify-center items-center right-0">
          <Link
            href="/"
            className={`hover:scale-100 duration-500 ${
              pathname === "/" ? "text-[#5E548E]" : "text-black"
            }`}
          >
            Home
          </Link>
          <Link
            href="/jobs"
            className={`hover:scale-100 duration-500 ${
              pathname === "/jobs" ? "text-[#5E548E]" : "text-black"
            }`}
          >
            Jobs
          </Link>
        </div>
      )}
    </div>
  );
};

export default Navbar;
