import Image from "next/image";
import { ClipTextTitleReversed } from "./TextStyle/ClipTextTitle";

const HeroSection = () => {
  return (
    <section className="w-full bg-repeat-x sm:bg-cover bg-left-top bg-[url('/static/images/pastel.jpg')] h-svh flex items-start justify-center text-center">
      <div className="bg-primary/10 p-10 rounded-lg max-w-lg mx-3 sm:mx-auto bg-cover mt-20">
        <div className="mb-3 flex gap-2 justify-center">
          <a
            href="#lesson"
            className="bg-blue hover:bg-primary/30 text-whitish py-2 px-4 rounded-md"
          >
            レッスン
          </a>
          <a
            href="#performance"
            className="mx-2 bg-pink_strong hover:bg-primary/30 text-whitish py-2 px-4 rounded-md"
          >
            演奏ご依頼
          </a>
        </div>
        <div className="flex flex-col sm:flex-row items-center justify-center">
          <div className="flex flex-col items-center justify-center">
            <Image
              src={"/static/images/icon.JPG"}
              alt=""
              height={200}
              width={120}
              className="rounded-full"
            />
            <ClipTextTitleReversed fontSize="medium">
              フルート＆オカリナを
              <br />
              一緒に奏ませんか？
            </ClipTextTitleReversed>

            <div className="mt-3 flex gap-2">
              <a
                href="#about"
                className="bg-pink_strong hover:bg-primary/30 text-whitish py-2 px-4 rounded-md"
              >
                講師紹介
              </a>
              <a
                href="#access"
                className="bg-blue hover:bg-primary/30 text-whitish py-2 px-4 rounded-md"
              >
                アクセス
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
