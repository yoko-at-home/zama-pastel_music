"use client";
import { siteMetadata } from "@/data/siteMetadata";
import Link from "next/link";
import { IoIosMail } from "react-icons/io";
import { CiInstagram } from "react-icons/ci";
import { TfiYoutube } from "react-icons/tfi";
import { ClipTextTitleReversed } from "../TextStyle/ClipTextTitle";

export const SnsLinks = () => {
  return (
    <div className="flex justify-center space-x-5 mb-6 items-center">
      <a
        href={`mailto:${siteMetadata.email}`}
        title="Email"
        className="text-pink bg-primary rounded-full w-8 h-8 flex justify-center items-center hover:bg-blue_green/60"
      >
        <IoIosMail />
      </a>

      <div className="flex flex-col items-center gap-0  hover:text-blue_green">
        <ClipTextTitleReversed fontSize="small">フルート</ClipTextTitleReversed>
        <Link
          href={siteMetadata.youtube}
          target="_blank"
          className="text-pink bg-primary rounded-full w-8 h-8 flex justify-center items-center hover:bg-blue_green/60"
        >
          <TfiYoutube />
        </Link>
        <ClipTextTitleReversed fontSize="small">
          チャンネル
        </ClipTextTitleReversed>
      </div>
      <div className="flex flex-col items-center gap-0 text-sm hover:text-blue_green">
        <ClipTextTitleReversed fontSize="small">オカリナ</ClipTextTitleReversed>
        <Link
          href={siteMetadata.youtube_okarina}
          target="_blank"
          className="text-pink bg-primary rounded-full w-8 h-8 flex justify-center items-center"
        >
          <TfiYoutube />
        </Link>
        <ClipTextTitleReversed fontSize="small">
          チャンネル
        </ClipTextTitleReversed>
      </div>
      <Link
        href={siteMetadata.instagram}
        target="_blank"
        className="text-pink bg-primary rounded-full w-8 h-8 flex justify-center items-center hover:bg-blue_green/60"
      >
        <CiInstagram />
      </Link>
    </div>
  );
};
