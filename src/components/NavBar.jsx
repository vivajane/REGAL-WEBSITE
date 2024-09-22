import React from "react";
import Menu from "./Menu";
import Link from "next/link";
import SearchBar from "./SearchBar";
import Iconss from "./Iconss";


const NavBar = ({show}) => {
  return (
    <div className={`w-full flex relative justify-between items-center py-4 px-8 md:px-24 xl:px-32 ${show && "overflow-hidden h-screen"}`}>
      <div className=" w-full flex justify-between md:hidden items-center ">
        {/* MOBILE */}
        <Link href="/" className="font-mono italic">REGAL</Link>
        <Menu show={show} />
      </div>

      <div className="hidden md:flex justify-between gap-6 items-center w-full ">
        {/* LARGE */}
        <div className="flex justify-between text-xl gap-12 w-full xl:w-1/2">
          <Link className="font-mono italic" href="/">REGAL</Link>
          <div className="flex gap-6">
            <Link href="/deals">Deals</Link>
            <Link href="/about">About</Link>
            <Link href="/contact">Contact</Link>
            <Link href="/shop">Shop</Link>
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
