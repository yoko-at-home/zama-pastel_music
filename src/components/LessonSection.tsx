import Link from "next/link";
import { FaChild, FaLaptop } from "react-icons/fa";
import { PiMusicNoteThin } from "react-icons/pi";
import { VscMusic } from "react-icons/vsc";
const items = [
  {
    title: "初心者から安心のレッスン",
    description:
      "「音楽は心の栄養」。丁寧で楽しいレッスンで、充実したフルートの時間を一緒に楽しみましょう。",
    icon: <VscMusic className="text-blue text-3xl mb-4" />,
    more: "/#lessonAdult",
    link: "/#pricingAdult",
  },
  {
    title: "楽しさから学べるレッスン",
    description:
      "「好きこそものの上手なれ」をモットーに、やさしく楽しいレッスンで音楽を好きになるサポートをします。",
    icon: <FaChild className="text-blue_green text-3xl mb-4" />,
    more: "/#lessonChild",
    link: "/#pricingChild",
  },
  {
    title: "自宅でオンラインレッスン",
    description:
      "YouTube『Pastel harmony』でもお届けしている、癒しの音楽を自宅で手軽に学べます。",
    icon: <FaLaptop className="text-purple-500 text-3xl mb-4" />,
    more: "/#lessonOnline",
    link: "/#pricingOnline",
  },
  {
    title: "癒しと感動の音楽をお届け",
    description:
      "サントリーホールでの経験もある講師が、心に響く音楽で大切なイベントを彩ります。",
    icon: <PiMusicNoteThin className="text-pink_strong text-3xl mb-4" />,
    more: "/#performance",
    link: "/#pricingPerformance",
  },
];

const LessonSection = () => {
  return (
    <section id="lesson" className="py-20 bg-gray-100 z-30 text-primary">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h3 className="text-3xl font-semibold mb-8">レッスンのご案内</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {items.map((item, index) => (
            <div key={index} className="p-6 bg-white rounded-lg shadow-lg">
              <div className="flex justify-center">{item.icon}</div>
              <h4 className="text-xl font-bold mb-4">{item.title}</h4>
              <p>{item.description}</p>
              <div className="flex justify-around gap-4 mt-3">
                <p className=" bg-purple text-white rounded-md">
                  <Link href={item.more}>
                    <span className="bg-purple text-white rounded-md px-4 py-2 cursor-pointer">
                      ご案内
                    </span>
                  </Link>
                </p>
                {item.link && (
                  <Link href={item.link}>
                    <span className=" bg-purple text-white rounded-md px-4 py-2 cursor-pointer">
                      詳細
                    </span>
                  </Link>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LessonSection;
