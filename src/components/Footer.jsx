import React from "react";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import Link from "next/link";

const Footer = () => {
  return (
    
      <div className="bg-footer py-14 md:flex justify-between text-black px-6 lg:px-24 xl:px-32">
        <div>
          <h1 className="font-bold text-2xl">Regal Fashion</h1>
          <p className="font-poppins font-[300px] xl:text-xl sm:text-base lg:text-lg py-6">
            Welcome the future of fashion <br /> services. Welcome to
            Regal
          </p>
          <div className="flex gap-10 py-6 ">
            <Link href="#"><FaFacebook /></Link>
            <Link href="#"><FaInstagram /></Link>
            <Link href="#"><FaTwitter /></Link>
          </div>
        </div>
        <div className="flex flex-col gap-4 xl:text-xl sm:text-sm lg:text-lg">
          <h1 className="font-poppins font-[500px] text-xl my-4 md:my-0">
            Quick Links
          </h1>
          <Link className="font-[400px] xl:text-[18px] lg:text-[16px]" href="/">
            Home
          </Link>
          <Link className="font-[400px] xl:text-[18px] lg:text-[16px] py-1" href="/about">
            About Us
          </Link>
          <Link className="font-[400px] xl:text-[18px] lg:text-[16px]" href="/Blog">
            Blog
          </Link>
          <Link className="font-[400px] xl:text-[18px] lg:text-[16px] py-1" href="/services">
            Our Services
          </Link>
          <Link className="font-[400px] xl:text-[18px] lg:text-[16px]" href="/contact">
            Contact Us
          </Link>
          <Link className="font-[400px] xl:text-[18px] lg:text-[16px] py-1" href="partner">
            Partner with Us
          </Link>
        </div>

        <form
          className="bg-white px-4 rounded-[10px] text-lg"
          action=""
        >
          <h1 className="font-poppins font-[600px] xl:text-xl sm:text-sm lg:text-lg ">
            Suscribe to our Newsletter
          </h1>
          <div className="md:pb-1 pb-3 pt-3 ">
            <input
              type="email"
              name="email"
              id="email"
              placeholder="  Enter your email address"
              className="bg-gray-300 rounded w-[100%] py-2"
            />
          </div>
          <div className="md:pb-1 pb-3">
            <button className="text-white  bg-download font-poppins font-[600px] text-base w-[100%] py-2 rounded">
              Subscribe Now
            </button>
          </div>
        </form>
      </div>


  );
};

export default Footer;

