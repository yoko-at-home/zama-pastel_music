import { ClipTextTitle } from "./TextStyle/ClipTextTitle";
import { siteMetadata } from "@/data/siteMetadata";

const HeaderSection = () => {
  return (
    <header className="h-full w-full bg-clip-padding backdrop-filter backdrop-blur-lg dark:bg-whitish/70 bg-primary/10 sticky top-0 z-10">
      <div className="max-w-6xl mx-auto px-4 flex justify-between items-center">
        <div className="flex items-center justify-around">
          <ClipTextTitle>{siteMetadata.title}</ClipTextTitle>
        </div>
      </div>
    </header>
  );
};

export default HeaderSection;
