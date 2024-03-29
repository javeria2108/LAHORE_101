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
        <Link href="/Profile">
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
            title="Sign Up"
            icon={<FaUser />}
            variant="btn_dark_green"
          />
        </div>
      )}
      </div>
      <FaBars className="lg:hidden text-primary" size={30}  />
    </nav>
  );
};

export default NavBar;
