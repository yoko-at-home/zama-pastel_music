import { FC, ReactNode } from "react";

type FontProps = {
  fontWeight?: "ordinary" | "bold";
  Color?: "green" | "violet";
  children: ReactNode;
};
export const ClipTextTitle: FC<FontProps> = (props) => {
  return (
    <h1 className="mb-5 pt-5 pl-2 md:text-3xl text-lg sm:text-2xl font-bold whitespace-nowrap">
      <span className="bg-gradient-to-r from-pink_strong to-primary bg-clip-text text-transparent drop-shadow-lg bg-black font-bold">
        {props.children}
      </span>
    </h1>
  );
};
export const ClipTextTitleReversed: FC<FontProps> = (props) => {
  return (
    <h2 className="mb-5 pt-5 pl-2 text-3xl font-black md:text-5xl">
      <span className="bg-gradient-to-r from-orange-300 via-red-300 to-orange-500 bg-clip-text text-transparent drop-shadow-lg">
        {props.children}
      </span>
    </h2>
  );
};
