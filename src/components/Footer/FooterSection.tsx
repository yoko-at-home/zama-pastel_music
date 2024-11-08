"use client";

import { CustomLink } from "../CustomLink";
import { SnsLinks } from "./SnsLinks";
import { labels } from "../Navigation";
import { ClipTextTitle } from "../TextStyle/ClipTextTitle";

export const FooterSection = () => {
  return (
    <footer className="fixed bottom-0 w-full bg-clip-padding backdrop-filter backdrop-blur-lg bg-light_blue/40 text-primary pt-4 flex-col text-sm">
      <nav className="flex justify-center flex-wrap gap-4 font-medium mb-5">
        {labels.map(({ href, label }) => {
          return (
            <CustomLink
              key={href}
              href={href}
              // onClick={handleNavBarOpen}
              className="hover:text-blue_green"
            >
              <ClipTextTitle fontSize="small">{label}</ClipTextTitle>
            </CustomLink>
          );
        })}
      </nav>
      <SnsLinks />
    </footer>
  );
};
