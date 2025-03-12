"use client";

import React from "react";
import { IoMenu } from "react-icons/io5";
import { FaTimes } from "react-icons/fa";
import Link from "next/link";
import { useState } from "react";

const Menu = () => {
  const [open, setOpen] = useState(false);

  const onClick = () => {
    setOpen((open) => !open);
  };

  const closeModal = () => {
    setOpen(false);
  };
  return (
    <div className=" cursor-pointer  ">
      <div onClick={onClick}>{open ? <FaTimes /> : <IoMenu />}</div>
      {open && <div 
        className={`absolute w-full h-[calc(100vh-80px)] left-0 top-20 gap-6 flex flex-col text-center items-center z-10 bg-slate-950 text-white p-10 ${open ? "inset-0": ""}`}
      >
        <Link onClick={closeModal} href="/">
          Home
        </Link>
        <Link onClick={closeModal} href="/shop">
          Shop
        </Link>
        <Link onClick={closeModal} href="/about">
          About
        </Link>
        <Link onClick={closeModal} href="/deals">
          Deals
        </Link>
        <Link onClick={closeModal} href="/contact">
          Contact
        </Link>
        <Link onClick={closeModal} href="/logout">
          Logout
        </Link>
        <Link onClick={closeModal} href="/cart">
          Cart(2)
        </Link>
      </div>}
    </div>
  );
};

export default Menu;
