import Image from "next/image";
import React from "react";
import { ClipTextTitle } from "./TextStyle/ClipTextTitle";

const AboutSection = () => {
  return (
    <div
      id="about"
      className="w-full bg-cover bg-bottom bg-right-b bg-[url('/static/images/pink-bubbles.jpeg')] py-20"
    >
      <div className="py-10 px-5 mx-5 max-w-2xl sm:mx-auto rounded-lg bg-cover bg-gray-800 backdrop-filter backdrop-blur-lg bg-clip-text text-transparent">
        <div className="flex flex-col items-center justify-center">
          <ClipTextTitle fontSize="large">講師　菅 博子</ClipTextTitle>
          <Image
            src={"/static/images/portrait.JPG"}
            alt=""
            height={200}
            width={120}
            className="rounded-full border-4 border-purple border-double mt-3"
          />
        </div>
        <p className=" pt-5 pl-5 ">
          初めまして。フルート＆オカリナの講師、菅博子です。本日は私のウェブサイトをご覧いただき、誠にありがとうございます。
        </p>
        <p className=" pt-5 pl-5 ">
          私は玉川大学芸術学科音楽専攻フルート課程を卒業し、在学中には玉川大学管弦楽団の主席フルート奏者として、サントリーホールでの「第九演奏会」などに出演いたしました。
        </p>
        <p className=" pt-5 pl-5">
          卒業後は、スガナミ楽器やヤマハミュージックスクールなどでフルート及びオカリナの講師を務め、延べ500人以上の生徒を指導してまいりました。私のレッスンは「好きこそものの上手なれ」「音楽は心の栄養」という理念を基軸に、分かりやすく楽しい内容が定評です。
        </p>
        <p className=" pt-5 pl-5">
          また、講師活動と並行して、町田・神奈川県央地区を中心に音楽の裾野を広げるための演奏活動も行っております。
        </p>
        <p className=" pt-5 pl-5">
          「コロナ禍で疲れた心を癒せるような音楽をお届けしたい」との思いから、3年前にYouTubeチャンネル『Pastel
          harmony』を開設し、様々なジャンルの音楽をお届けしています。
        </p>
      </div>
    </div>
  );
};

export default AboutSection;
