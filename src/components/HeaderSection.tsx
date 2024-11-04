"use client";
import Image from "next/image";
import { ClipTextTitle } from "./TextStyle/ClipTextTitle";
import { siteMetadata } from "@/data/siteMetadata";
import { CustomLink, labels } from "./Navigation";

const HeaderSection = () => {
  return (
    <header className="h-full w-full bg-clip-padding backdrop-filter backdrop-blur-lg dark:bg-whitish/70 bg-primary/10 sticky top-0 z-10">
      <div className="max-w-6xl mx-auto px-4 flex justify-between items-center">
        <div className="flex items-center justify-around">
          <ClipTextTitle>{siteMetadata.title}</ClipTextTitle>
          <Image
            className="rounded-full m-3 border-2 border-gray-50"
            src="/static/images/icon.jpg"
            alt={`${siteMetadata.title}イメージ`}
            width={40}
            height={40}
          />
        </div>
        <nav className="hidden md:flex justify-center items-center flex-wrap gap-6 font-medium mb-5">
          {labels.map(({ href, label }) => {
            return (
              <CustomLink
                key={href}
                href={href}
                // onClick={handleNavBarOpen}
                className="text-primary hover:text-sky-700"
              >
                {label}
              </CustomLink>
            );
          })}
        </nav>
      </div>
    </header>
  );
};

export default HeaderSection;
