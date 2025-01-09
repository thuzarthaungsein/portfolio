"use client";

import { resumeData } from "@/data/resume";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Navbar() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();
  const { name } = resumeData.personalInfo;
  const [isActive, setIsActive] = useState("home");

  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => setIsOpen((prev) => !prev);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <nav className="sticky top-0 z-50 border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center px-4">
        <div className="flex flex-1 items-center justify-between">
          <div className="hidden sm:flex gap-6 md:gap-10 border border-gray-500 px-3 py-2 rounded mt-2 lg:ml-8">
            <Link
              href="/"
              className={`hover:text-foreground/80 ${
                isActive == "home" ? "text-blue-400 font-bold" : ""
              }`}
              onClick={() => setIsActive("home")}
            >
              Home
            </Link>
            <Link
              href="#experience"
              className={`hover:text-foreground/80 ${
                isActive == "experience" ? "text-blue-400 font-bold" : ""
              }`}
              onClick={() => setIsActive("experience")}
            >
              Experience
            </Link>
            <Link
              href="#projects"
              className={`hover:text-foreground/80 ${
                isActive == "projects" ? "text-blue-400 font-bold" : ""
              }`}
              onClick={() => setIsActive("projects")}
            >
              Projects
            </Link>
            <Link
              href="#own"
              className={`hover:text-foreground/80 ${
                isActive == "own" ? "text-blue-400 font-bold" : ""
              }`}
              onClick={() => setIsActive("own")}
            >
              My-Creations
            </Link>
            <Link
              href="#skills"
              className={`hover:text-foreground/80 ${
                isActive == "skills" ? "text-blue-400 font-bold" : ""
              }`}
              onClick={() => setIsActive("skills")}
            >
              Skills
            </Link>
          </div>

          <div className="relative sm:hidden">
            <button
              onClick={toggleDropdown}
              className="px-4 py-2 bg-blue-500 dark:bg-gray-800 dark:border dark:border-gray-700 text-white rounded hover:bg-blue-600 dark:hover:bg-gray-900"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="2"
                stroke="currentColor"
                className="size-6 inline"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              </svg>

              {/* <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="2"
                stroke="currentColor"
                className="size-4 inline-block ml-1"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m19.5 8.25-7.5 7.5-7.5-7.5"
                />
              </svg> */}
            </button>
            {isOpen && (
              <ul className="absolute left-0 mt-2 bg-white border rounded shadow-lg w-48">
                <li className="dark:bg-black dark:hover:bg-gray-800 hover:bg-gray-100 ">
                  <Link
                    href="/"
                    className="block px-4 py-3"
                    onClick={() => setIsOpen((prev) => !prev)}
                  >
                    Home
                  </Link>
                </li>
                <li className="dark:bg-black dark:hover:bg-gray-800 hover:bg-gray-100 ">
                  <Link
                    href="#experience"
                    className="block px-4 py-3"
                    onClick={() => setIsOpen((prev) => !prev)}
                  >
                    Experience
                  </Link>
                </li>
                <li className="dark:bg-black dark:hover:bg-gray-800 hover:bg-gray-100 ">
                  <Link
                    href="#projects"
                    className="block px-4 py-3"
                    onClick={() => setIsOpen((prev) => !prev)}
                  >
                    Projects
                  </Link>
                </li>
                <li className="dark:bg-black dark:hover:bg-gray-800 hover:bg-gray-100 ">
                  <Link
                    href="#own"
                    className="block px-4 py-3"
                    onClick={() => setIsOpen((prev) => !prev)}
                  >
                    My-Creations
                  </Link>
                </li>
                <li className="dark:bg-black dark:hover:bg-gray-800 hover:bg-gray-100 ">
                  <Link
                    href="#skills"
                    className="block px-4 py-3"
                    onClick={() => setIsOpen((prev) => !prev)}
                  >
                    Skills
                  </Link>
                </li>
              </ul>
            )}
          </div>

          <button
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="rounded-md p-2 hover:bg-accent"
          >
            {theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
          </button>
        </div>
      </div>
    </nav>
  );
}
