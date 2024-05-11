import React from "react";
import Image from "next/image";
import logo from "../../../public/logo.svg";
import Link from "next/link";

function Navbar() {
  return (
    <div
      style={{
        position: "sticky",
        top: "0",
        width: "100%",
        height: "110px",
        backgroundColor: "rgba(0,0,0,.8)",
      }}
    >
      <div className="container mx-auto px-4 h-full">
        <div className="flex justify-between items-center h-full">
          <Image
            src={logo}
            style={{
              width: "240px",
              height: "100px",
              size: "cover",
              sizes: "100vw",
            }}
          />
          <ul style={{ color: "#E6E7E9" }} className="hidden md:flex gap-x-6">
            <li>
              <Link href="/about">
                <p>Home</p>
              </Link>
            </li>
            <li>
              <Link href="/about">
                <p>About us</p>
              </Link>
            </li>
            <li>
              <Link href="/services">
                <p>Products</p>
              </Link>
            </li>
            <li>
              <Link href="/services">
                <p>Blogs</p>
              </Link>
            </li>
            <li>
              <Link href="/contacts">
                <p>Contacts</p>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
