"use client";
import Link from "next/link";
import Image from "next/image";

export const NaviIcon = () => {
  return (
    <Link href={"/"} className="flex items-center py-4 ">
      <Image
        className="rounded-full"
        src="/static/images/icon.jpg"
        alt="pastelイメージキャラクター"
        height={50}
        width={50}
      />
    </Link>
  );
};
