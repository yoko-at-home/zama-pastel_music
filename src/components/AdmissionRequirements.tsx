// components/AdmissionRequirements.js
import {
  FaEdit,
  FaClock,
  FaMoneyBill,
  FaSignOutAlt,
  FaBook,
} from "react-icons/fa";

const requirements = [
  {
    id: 1,
    title: "ご入会",
    icon: <FaEdit className="text-blue" />,
    content:
      "入会申込書に必要事項をご記入の上、入会金2,000円を添えてお申し込み下さい。",
  },
  {
    id: 2,
    title: "レッスン時間及び回数",
    icon: <FaClock className="text-blue_green" />,
    content:
      "レッスンの時間や回数は料金表に記載の通りです。月末に次月の日程を講師と相談し、希望日程をご連絡下さい。天災や講師都合による休講の場合のみ振替が可能です。",
  },
  {
    id: 3,
    title: "レッスン料の納入",
    icon: <FaMoneyBill className="text-yellow-500" />,
    content:
      "レッスン料は前月の最終レッスン時までにお支払い下さい。支払い方法は現金、銀行振込、PayPayが利用可能です。",
  },
  {
    id: 4,
    title: "退会される場合",
    icon: <FaSignOutAlt className="text-pink_strong" />,
    content:
      "退会される場合は、月の15日までに講師にご連絡下さい。途中退会でも当月のレッスン料は返金できません。",
  },
  {
    id: 5,
    title: "その他",
    icon: <FaBook className="text-purple" />,
    content:
      "レッスンには使用教材の教本以外に曲集も使用しますので、詳細は講師にお尋ね下さい。通学には公共交通機関をご利用下さい。駐車場はございません。",
  },
];

export default function AdmissionRequirements() {
  return (
    <div
      className="px-8 py-16 bg-white text-gray-800 shadow-md rounded-lg mt-8"
      id="admission"
    >
      <h2 className="text-2xl font-bold text-center mb-6">♪ 募集要項 ♪</h2>
      <div className="space-y-6">
        {requirements.map((item) => (
          <div key={item.id} className="flex items-start">
            <div className="text-2xl mr-4">{item.icon}</div>
            <div>
              <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
              <p className="text-gray-700">{item.content}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
