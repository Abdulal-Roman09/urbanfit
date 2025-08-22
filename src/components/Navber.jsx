"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useSession, signOut } from "next-auth/react";
import Image from "next/image";
import {
  FiHome,
  FiShoppingBag,
  FiInfo,
  FiPlusCircle,
  FiBookOpen,
  FiFileText,
  FiMenu,
  FiX,
} from "react-icons/fi";
import Logo from "./Logo";

const Navbar = () => {
  const { data: session, status } = useSession();
  const [mobileOpen, setMobileOpen] = useState(false);

  // Routes array
  const routes = [
    { name: "Home", path: "/", icon: <FiHome className="h-5 w-5 mr-1" /> },
    {
      name: "Products",
      path: "/products",
      icon: <FiShoppingBag className="h-5 w-5 mr-1" />,
    },
    {
      name: "About",
      path: "/about",
      icon: <FiInfo className="h-5 w-5 mr-1" />,
    },
    {
      name: "Add Product",
      path: "/dashboard/add-product",
      icon: <FiPlusCircle className="h-5 w-5 mr-1" />,
    },
    {
      name: "Services",
      path: "/services",
      icon: <FiBookOpen className="h-5 w-5 mr-1" />,
    },

  ];

  // Loading state handling
  if (status === "loading") return null;

  return (
    <header className="bg-white dark:bg-gray-900 shadow-sm">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center h-16">
        {/* Logo */}
        <Logo />

        {/* Desktop Nav Links */}
        <nav className="hidden md:flex items-center gap-6 text-gray-600 dark:text-white">
          {routes.map((route) => (
            <Link
              key={route.name}
              href={route.path}
              className="flex items-center hover:text-teal-600 dark:hover:text-teal-400 transition"
            >
              {route.icon}
              <span className="text-sm">{route.name}</span>
            </Link>
          ))}
        </nav>

        {/* Auth Buttons */}
        <div className="hidden md:flex items-center gap-4">
          {!session ? (
            <>
              <Link
                href="/login"
                className="px-4 py-2 rounded-md bg-teal-600 text-white hover:bg-teal-700 transition"
              >
                Login
              </Link>
              <Link
                href="/register"
                className="px-4 py-2 rounded-md bg-gray-100 text-teal-600 dark:bg-gray-800 dark:text-white hover:bg-gray-200 dark:hover:bg-gray-700 transition"
              >
                Register
              </Link>
            </>
          ) : (
            <div className="flex items-center gap-3">
              <Image
                src={session.user.image || "/default-avatar.png"}
                alt={session.user.name}
                width={32}
                height={32}
                className="rounded-full border border-gray-300"
              />
              <button
                onClick={() => signOut()}
                className="px-4 py-2 rounded-md bg-red-600 text-white hover:bg-red-700 transition"
              >
                Logout
              </button>
            </div>
          )}
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 rounded-md text-gray-600 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-800 transition"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <FiX size={24} /> : <FiMenu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="md:hidden bg-white dark:bg-gray-900 px-4 pt-2 pb-4 space-y-2 shadow-md">
          {routes.map((route) => (
            <Link
              key={route.name}
              href={route.path}
              className="flex items-center px-3 py-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 transition"
              onClick={() => setMobileOpen(false)}
            >
              {route.icon}
              <span>{route.name}</span>
            </Link>
          ))}

          {!session ? (
            <div className="flex flex-col gap-2 mt-2">
              <Link
                href="/login"
                className="px-4 py-2 rounded-md bg-teal-600 text-white hover:bg-teal-700 transition"
                onClick={() => setMobileOpen(false)}
              >
                Login
              </Link>
              <Link
                href="/register"
                className="px-4 py-2 rounded-md bg-gray-100 text-teal-600 dark:bg-gray-800 dark:text-white hover:bg-gray-200 dark:hover:bg-gray-700 transition"
                onClick={() => setMobileOpen(false)}
              >
                Register
              </Link>
            </div>
          ) : (
            <button
              onClick={() => signOut()}
              className="mt-2 w-full px-4 py-2 rounded-md bg-red-600 text-white hover:bg-red-700 transition"
            >
              Logout
            </button>
          )}
        </div>
      )}
    </header>
  );
};

export default Navbar;
