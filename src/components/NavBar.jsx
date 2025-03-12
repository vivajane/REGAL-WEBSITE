"use client";
import React from "react";
import Menu from "./Menu";
import Link from "next/link";
import SearchBar from "./SearchBar";
import Iconss from "./Iconss";
import { usePathname } from "next/navigation";

const NavBar = () => {
  const path= usePathname();
  return (
    <div
      className=" h-20 relative py-4 px-8 md:px-24 xl:px-32" 
    >
      <div className="h-full w-full flex justify-between md:hidden items-center ">
        {/* MOBILE */}
        <Link href="/" className="font-mono italic">
          REGAL
        </Link>
        <Menu/>
      </div>

      <div className="hidden md:flex justify-between gap-6 items-center w-full ">
        {/* LARGE */}
        <div className="flex justify-between text-xl gap-12 w-full xl:w-1/2">
          <Link className="font-mono italic" href="/">
            REGAL
          </Link>
          <div className="flex gap-6">
            <Link className={path.startsWith("/share") ? "active" : ""} href="/share">Share</Link>
            <Link className={path.startsWith("/about") ? "active" : ""} href="/about">About</Link>
            <Link className={path.startsWith("/contact") ? "active" : ""} href="/contact">Contact</Link>
            <Link className={path.startsWith("/shop") ? "active" : ""} href="/shop">Shop</Link>
          </div>
        </div>
        <div className="w-1/2 xl:flex justify-between hidden">
          <SearchBar />
          <Iconss />
        </div>
      </div>
    </div>
  );
};

export default NavBar;
