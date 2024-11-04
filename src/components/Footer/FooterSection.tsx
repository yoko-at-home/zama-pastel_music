"use client";
import { siteMetadata } from "@/data/siteMetadata";
import { labels } from "../Navigation";
import Link from "next/link";
import { IoIosMail } from "react-icons/io";
import { CustomLink } from "../CustomLink";

export const FooterSection = () => {
  return (
    <footer className="bg-primary text-whitish pt-10 pb-6 flex-col">
      <nav className="flex justify-center flex-wrap gap-6 font-medium mb-5">
        {labels.map(({ href, label }) => {
          return (
            <CustomLink
              key={href}
              href={href}
              // onClick={handleNavBarOpen}
              className="hover:text-blue"
            >
              {label}
            </CustomLink>
          );
        })}
      </nav>
      <div className="flex justify-center space-x-5">
        <a href={`mailto:${siteMetadata.email}`} title="Email">
          <IoIosMail />
        </a>
        <Link href={siteMetadata.instagram} target="_blank">
          Instagram
        </Link>
        <Link href={siteMetadata.youtube} target="_blank">
          YouTubeフルート
        </Link>
        <Link href={siteMetadata.youtube_okarina} target="_blank">
          YouTubeオカリナ
        </Link>
      </div>
      <div className="max-w-6xl mx-auto px-4 text-center">
        <p>
          {`© ${new Date().getFullYear()} `} {siteMetadata.title}. All rights
          reserved.
        </p>
      </div>
    </footer>
  );
};
