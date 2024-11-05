import Image from "next/image";
import React from "react";
import { ClipTextTitle } from "./TextStyle/ClipTextTitle";

const AboutSection = () => {
  return (
    <div
      id="about"
      className="w-full bg-cover bg-right-b bg-[url('/static/images/pink-bubbles.jpeg')] py-20"
    >
      <div className=" bg-opacity-80 p-10 rounded-lg max-w-lg mx-3 sm:mx-auto bg-cover ">
        <div className="flex flex-col  items-center justify-center">
          <div className="flex flex-col items-center justify-center">
            <ClipTextTitle fontSize="large">講師　菅 博子</ClipTextTitle>
            <Image
              src={"/static/images/portrait.JPG"}
              alt=""
              height={200}
              width={120}
              className="rounded-full border-4 border-primary border-double"
            />
          </div>
          <p className=" pt-5 pl-5">
            玉川大学芸術学科音楽専攻フルート課程卒業。
            在学中玉川大学管弦楽団主席フルート奏者としてサントリーホールにて「第九演奏会」等に出演。
          </p>
          <p className=" pt-5 pl-5">
            卒業後、スガナミ楽器をはじめヤマハミュージックスクール等に於いて、フルート及びオカリナ講師を務め、生徒数延べ500人を超える。【好きこそものの上手なれ】【音楽は心の栄養】を基軸とした“分かりやすく楽しいレッスン”が定評。
          </p>
          <p className=" pt-5 pl-5">
            講師活動の傍ら、町田•神奈川県央地区を中心に音楽の裾野を広げる為の演奏活動を行なっている。
          </p>
          <p className=" pt-5 pl-5">
            「コロナ禍で疲れた心を癒せるような音楽をお届けしたい」と考え3年前にYouTube『Pastel
            harmony』チャンネルを開設し、様々なジャンルの音楽をお届け中。
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
