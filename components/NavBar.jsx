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
    
        <p  className="
            regular-16 text-primaryDark flex flex-row flexCenter cursor-pointer pb-1.5
            transition-all hover:font-bold gap-4"  onClick={toggleDropdown}>Categories {">"}{isOpen && (
              <ul
                className=" bg-gray-800 text-white rounded-md mt-2 px-2 py-2 shadow-md right-0 w-40" // Adjust width as needed
              >
                <li className="hover:bg-gray-700">
                  <Link href="/categories/historical-places" >
                  Historical Places
                  </Link>
                </li>
                <li className="hover:bg-gray-700" >
                  <Link href="/categories/malls">
                    Malls
                  </Link>
                </li>
                <li className="hover:bg-gray-700">
                  <Link href="/categories/restaurants">
                    Restaurants
                  </Link>
                </li>
                <li className="hover:bg-gray-700">
                  <Link href="/categories/parks" >
                    Parks
                  </Link>
                </li>
              </ul>
            )}</p>
            
          
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
