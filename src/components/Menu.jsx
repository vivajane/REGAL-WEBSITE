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
      <div
        className={`w-full absolute top-16 gap-6 h-screen text-center flex flex-col pl-10 mt-4 overflow-hidden ${
          open ? "inset-0" : "hidden"
        }`}
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
      </div>
    </div>
  );
};

export default Menu;
