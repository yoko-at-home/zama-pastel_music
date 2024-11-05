"use client";
import { useState } from "react";
import Link from "next/link";
import { ClipTextTitle } from "./TextStyle/ClipTextTitle";
import { siteMetadata } from "@/data/siteMetadata";
import { useInView } from "react-intersection-observer";
import { NaviIcon } from "./NaviIcon";

const HeaderSection = () => {
  const [showHeader, setShowHeader] = useState(true);

  // Intersection Observerの設定
  const { ref } = useInView({
    threshold: 0,
    onChange: (inView) => setShowHeader(inView),
  });

  return (
    <>
      {/* スクロールを監視するためのダミー要素 */}
      <div ref={ref} className="h-1" />

      {/* ヘッダー */}
      <header
        className={`fixed top-0 w-full z-10 transition-transform duration-300 ${
          showHeader ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <div className="backdrop-filter backdrop-blur-lg bg-secondary/20">
          <div className="max-w-6xl mx-auto px-4 flex justify-between items-center h-16">
            <Link href={"/"} className="flex items-center py-4 ">
              <ClipTextTitle fontSize="large">
                {siteMetadata.title}
              </ClipTextTitle>
            </Link>
            <NaviIcon />
          </div>
        </div>
      </header>
    </>
  );
};

export default HeaderSection;
