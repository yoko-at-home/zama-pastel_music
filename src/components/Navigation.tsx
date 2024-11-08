/* eslint-disable @next/next/no-img-element */
"use client";
import { useState } from "react";
import { CustomLink } from "./CustomLink";

export const labels = [
  { href: "/#contact", label: "コンタクト" },
  { href: "/#access", label: "アクセス" },
  { href: "/#about", label: "ご挨拶" },
  { href: "/#lesson", label: "教室案内" },
  { href: "/", label: "Top" },
];

export const Navigation = () => {
  const handleNavBarOpen = () => {
    return setIsNavbarOpen(!isNavbarOpen);
  };
  const [isNavbarOpen, setIsNavbarOpen] = useState(false);

  return (
    <>
      <div className="fixed right-5 bottom-0 rounded pt-1">
        <button
          type="button"
          className="mx-1 h-20 w-20 rounded z-50"
          aria-label="Toggle Menu"
          onClick={handleNavBarOpen}
        >
          <img
            alt="navigation icon"
            src="/static/images/icon.JPG"
            className="z-50 w-20 rounded-full md:w-24 bg-white border-2 border-sky-200 animate-pulse"
            width="30px"
            height="30px"
            loading="lazy"
          />
        </button>
        <div
          className={`fixed top-0 right-0 z-10 h-full w-full overflow-auto bg-sky-50 duration-300 ease-in-out ${
            isNavbarOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <button
            type="button"
            aria-label="toggle modal"
            className="fixed -top-7 h-4/5 w-full cursor-auto focus:outline-none"
            onClick={handleNavBarOpen}
          ></button>
          <nav className="z-0 py-8 text-center md:mt-40">
            {labels.map(({ href, label }) => {
              return (
                <CustomLink
                  key={href}
                  href={href}
                  onClick={handleNavBarOpen}
                  className="mx-auto flex flex-col p-2 text-right text-2xl font-medium tracking-widest text-gray-400 opacity-90 hover:text-gray-600 sm:p-3 sm:tracking-widest"
                >
                  {label}
                </CustomLink>
              );
            })}
          </nav>
        </div>
      </div>
    </>
  );
};
