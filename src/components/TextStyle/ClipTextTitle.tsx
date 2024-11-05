import { FC, ReactNode } from "react";

type FontProps = {
  fontSize: "small" | "medium" | "large";
  children: ReactNode;
};
export const ClipTextTitle: FC<FontProps> = ({
  fontSize = "medium",
  children,
}) => {
  const sizeClasses = {
    small: "text-sm",
    medium: "text-lg md:text-3xl",
    large: "text-xl md:text-4xl",
  };

  return (
    <h1 className={` ${sizeClasses[fontSize]} font-bold whitespace-nowrap`}>
      <span className="bg-gradient-to-r from-blue via-pink_strong to-blue_green bg-clip-text text-transparent drop-shadow-lg bg-black font-bold">
        {children}
      </span>
    </h1>
  );
};
export const ClipTextTitleReversed: FC<FontProps> = ({
  fontSize = "medium",
  children,
}) => {
  const sizeClasses = {
    small: "text-sm",
    medium: "text-xl md:text-3xl",
    large: "text-2xl md:text-4xl",
  };

  return (
    <h2 className={` ${sizeClasses[fontSize]}`}>
      <span className="bg-gradient-to-r from-purple via-blue to-pink_strong bg-clip-text text-transparent drop-shadow-lg">
        {children}
      </span>
    </h2>
  );
};
