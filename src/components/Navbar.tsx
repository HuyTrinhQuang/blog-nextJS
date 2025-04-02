"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

const NavbarHeader = () => {
  const router = useRouter();
  const isLoggedIn = localStorage.getItem("isLoggedIn");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    // Check if user is logged in
    if (!isLoggedIn) {
      router.push("/");
    }
  }, [router, isLoggedIn]);

  const handleLogout = () => {
    // Clear isLoggedIn from localStorage
    localStorage.removeItem("isLoggedIn");
    // Navigate to the login page
    router.push("/");
  };
  return (
    <nav className="bg-white shadow-lg">
      <div className="lg:w-10/12 md:w-10/12 sm:w-full mx-auto px-4">
        <div className="flex justify-between">
          <div className="flex space-x-4">
            {/* Logo */}
            <div>
              <Link
                href={"/blog"}
                className="flex items-center py-5 px-2 text-gray-700"
              >
                <svg
                  className="h-6 w-6 mr-1 text-blue-500"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 4.354a8.002 8.002 0 00-6.546 9.85l-.874 3.493a1.5 1.5 0 001.572 1.824l3.492-.874A8.001 8.001 0 1012 4.353z"
                  />
                </svg>
                <span className="font-bold">Brand</span>
              </Link>
            </div>

            {/* Primary Nav */}
            <div className="sm:hidden md:flex lg:flex items-center space-x-1">
              <Link
                href={"/blog"}
                className="py-5 px-3 text-gray-700 hover:text-gray-900"
              >
                Home
              </Link>
              <Link
                href={"/write"}
                className="py-5 px-3 text-gray-700 hover:text-gray-900"
              >
                Create Post
              </Link>
            </div>
          </div>

          {/* Secondary Nav */}
          <div className="sm:hidden md:flex lg:flex items-center space-x-1">
            <button
              onClick={handleLogout}
              className="py-2 px-3 bg-blue-500 text-white rounded hover:bg-blue-400 transition duration-300"
            >
              Logout
            </button>
          </div>

          {/* Mobile button */}
          <div className="md:hidden lg:hidden sm:flex items-center">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="mobile-menu-button"
            >
              <svg
                className="w-6 h-6 text-gray-700"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`mobile-menu ${
          isMobileMenuOpen ? "" : "lg:hidden md:hidden"
        } `}
      >
        <Link
          href={"/blog"}
          className="block py-2 px-4 text-sm hover:bg-gray-200"
        >
          Home
        </Link>
        <Link
          href={"/write"}
          className="block py-2 px-4 text-sm hover:bg-gray-200"
        >
          About
        </Link>
        <button
          onClick={handleLogout}
          className="block py-2 px-4 text-sm hover:bg-gray-200"
        >
          Logout
        </button>
      </div>
    </nav>
  );
};

export default NavbarHeader;
