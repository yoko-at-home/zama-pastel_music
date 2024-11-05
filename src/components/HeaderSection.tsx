import Link from "next/link";
import { ClipTextTitle } from "./TextStyle/ClipTextTitle";
import { siteMetadata } from "@/data/siteMetadata";

const HeaderSection = () => {
  return (
    <header className="h-full w-full bg-clip-padding backdrop-filter backdrop-blur-lg bg-secondary/20 sticky top-0 z-10">
      <div className="max-w-6xl mx-auto px-4 flex justify-between items-center">
        <Link
          href={"/"}
          className="flex items-center justify-around hover:pointer-events-auto py-6 pl-3"
        >
          <ClipTextTitle fontSize="large">{siteMetadata.title}</ClipTextTitle>
        </Link>
      </div>
    </header>
  );
};

export default HeaderSection;
