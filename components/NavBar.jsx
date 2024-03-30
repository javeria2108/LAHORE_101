"use client";
import { NAV_LINKS } from "@/constants";
import Link from "next/link";
import { React, useState, useEffect } from "react";
import Button from "./Button";
import { FaUser, FaBars } from "react-icons/fa";
import { signIn, useSession } from "next-auth/react";
const NavBar = () => {
  const { data: session, status } = useSession(); // Get user session data and status
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Local state for login status
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    if (status === "authenticated") {
      setIsLoggedIn(true);
    } else {
      setIsLoggedIn(false);
    }
  }, [status]); // Update isLoggedIn on session status change
  return (
    <nav
      className="flexBetween 
     padding-container relative z-30 py-5 bg-bgDark h-28"
    >
      <Link href="/">
        <img
          src="/Lahore101-logos.png"
          alt="Lahore101"
          width="130px" // Set width with unit
          height="130px" // Set height with unit
          style={{ objectFit: "contain", padding: 0, margin: 0 }} // Inline styles
        />
      </Link>
      {/*Links on nav bar apppear on big screen and hidden on small screens*/}
      <ul className="hidden h-full gap-12 lg:flex">
        {/*Loop over links */}
        {NAV_LINKS.map((link) => (
          <Link
            href={link.href}
            key={link.key}
            className="
            regular-16 text-primaryDark flexCenter cursor-pointer pb-1.5
            transition-all hover:font-bold"
          >
            {link.label}
          </Link>
        ))}
    
       
            
          
      </ul>
      {/* Conditionally render button based on login status */}
      <div className="hidden lg:flex">
      {isLoggedIn ? (
        <Link href="/pages/Profile">
          <Button
            type="button"
            title="Profile"
            icon={<FaUser />}
            variant="btn_dark_green"
          />
        </Link>
      ) : (
        <div onClick={() => signIn("google")}>
          <Button
            type="button"
            title="Sign In"
            icon={<FaUser />}
            variant="btn_dark_green"
          />
        </div>
      )}
      </div>
      <FaBars className="lg:hidden text-primary hover:text-primaryDark cursor-pointer" size={30} onClick={toggleDropdown} />
       {/* Sidebar menu (hidden initially) */}
       <ul
        className={`absolute top-0 left-0 w-full h-full bg-bgDark mt-28 transition-all duration-300 ease-in-out z-50 ${
          isOpen ? "opacity-100 translate-x-0" : "opacity-0 translate-x-full"
        }`}
      >
        <li className="py-4 px-6 text-xl font-medium text-white border-b border-primary">
          Menu
        </li>
        {/* Loop over navigation links */}
        {NAV_LINKS.map((link) => (
          <li key={link.key} className="py-2 px-6 text-base bg-bgDark text-white hover:text-gray-300">
            <Link href={link.href}>{link.label}</Link>
          </li>
        ))}

        {/* Conditionally render button based on login status */}
        <li className="py-2 px-6 text-base text-white hover:text-gray-300 bg-bgDark">
          {isLoggedIn ? (
            <Link href="/pages/Profile">
              <Button type="button" title="Profile" icon={<FaUser />} variant="btn_dark_green" />
            </Link>
          ) : (
            <div onClick={() => signIn("google")}>
              <Button type="button" title="Sign In" icon={<FaUser />} variant="btn_dark_green" />
            </div>
          )}
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
