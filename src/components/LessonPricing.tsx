// components/LessonPricing.js
export default function LessonPricing() {
  return (
    <div className="px-8 text-gray-800 my-16" id="pricing">
      <h2 className="text-2xl font-bold text-center mb-6">
        ♪ レッスン料金表 & 使用教材 ♪
      </h2>

      <section className="mb-8">
        <h3 className="text-xl font-semibold mb-4">
          大人のコース（中学生以上）
        </h3>
        <table className="w-full mb-4 border border-gray-300">
          <thead>
            <tr className="bg-gray-100">
              <th className="p-2 text-left font-medium">レッスン時間</th>
              <th className="p-2 text-left font-medium">１回／月</th>
              <th className="p-2 text-left font-medium">２回／月</th>
              <th className="p-2 text-left font-medium">
                ３回目以降（1回につき）
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="p-2 border-t">60分</td>
              <td className="p-2 border-t">6,000円</td>
              <td className="p-2 border-t">10,000円</td>
              <td className="p-2 border-t">+5,000円</td>
            </tr>
            <tr>
              <td className="p-2 border-t">45分</td>
              <td className="p-2 border-t">5,500円</td>
              <td className="p-2 border-t">9,000円</td>
              <td className="p-2 border-t">+4,500円</td>
            </tr>
            <tr>
              <td className="p-2 border-t">30分</td>
              <td className="p-2 border-t">5,000円</td>
              <td className="p-2 border-t">8,000円</td>
              <td className="p-2 border-t">+4,000円</td>
            </tr>
          </tbody>
        </table>
        <p className="text-sm text-gray-600 mb-4">※施設使用料、諸経費込み</p>
        <p className="text-sm text-gray-800">主な使用教材：</p>
        <ul className="list-disc list-inside pl-4 text-sm text-gray-800 mb-4">
          <li>フルート教本（ドレミ楽譜出版）</li>
          <li>アルテス</li>
          <li>ガリボルディ Op.131</li>
          <li>ケーラー Op.33</li>
          <li>その他</li>
        </ul>
      </section>

      <section className="mb-8">
        <h3 className="text-xl font-semibold mb-4">小学生のコース</h3>
        <table className="w-full mb-4 border border-gray-300">
          <thead>
            <tr className="bg-gray-100">
              <th className="p-2 text-left font-medium">学年</th>
              <th className="p-2 text-left font-medium">レッスン時間／回数</th>
              <th className="p-2 text-left font-medium">月額レッスン料</th>
              <th className="p-2 text-left font-medium">使用教材</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="p-2 border-t">低学年（1～3年生）</td>
              <td className="p-2 border-t">30分 × 3回／月</td>
              <td className="p-2 border-t">6,000円</td>
              <td className="p-2 border-t">
                フルートレッスンのための小曲集（リューギンシャ出版）
              </td>
            </tr>
            <tr>
              <td className="p-2 border-t">高学年（4～6年生）</td>
              <td className="p-2 border-t">30分 × 3回／月</td>
              <td className="p-2 border-t">7,000円</td>
              <td className="p-2 border-t">フルート教本（ドレミ楽譜出版）</td>
            </tr>
          </tbody>
        </table>
        <p className="text-sm text-gray-600">※施設使用料、諸経費込み</p>
      </section>

      <section className="mb-8">
        <h3 className="text-xl font-semibold mb-4">オカリナコース</h3>
        <table className="w-full mb-4 border border-gray-300">
          <thead>
            <tr className="bg-gray-100">
              <th className="p-2 text-left font-medium">レッスン時間</th>
              <th className="p-2 text-left font-medium">１回／月</th>
              <th className="p-2 text-left font-medium">２回／月</th>
              <th className="p-2 text-left font-medium">
                ３回目以降（1回につき）
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="p-2 border-t">60分</td>
              <td className="p-2 border-t">5,000円</td>
              <td className="p-2 border-t">9,000円</td>
              <td className="p-2 border-t">+4,000円</td>
            </tr>
            <tr>
              <td className="p-2 border-t">30分</td>
              <td className="p-2 border-t">3,000円</td>
              <td className="p-2 border-t">5,500円</td>
              <td className="p-2 border-t">+2,500円</td>
            </tr>
          </tbody>
        </table>
        <p className="text-sm text-gray-600">※施設使用料、諸経費込み</p>
        <p className="text-sm text-gray-800">使用教材：ご相談</p>
      </section>

      <section className="mb-8">
        <h3 className="text-xl font-semibold mb-4">オンラインレッスン</h3>
        <table className="w-full mb-4 border border-gray-300">
          <thead>
            <tr className="bg-gray-100">
              <th className="p-2 text-left font-medium">レッスン時間</th>
              <th className="p-2 text-left font-medium">１回</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="p-2 border-t">60分</td>
              <td className="p-2 border-t">5,000円</td>
            </tr>
            <tr>
              <td className="p-2 border-t">30分</td>
              <td className="p-2 border-t">3,000円</td>
            </tr>
          </tbody>
        </table>
        <p className="text-sm text-gray-600">※諸経費込み</p>
        <p className="text-sm text-gray-800">使用教材：ご相談</p>
      </section>

      <section className="mb-8">
        <p className="text-sm text-gray-800 mb-2">
          基礎練習から曲まで、充実したレッスンプログラムを基本としていることから、60分コースをお勧めしております。
        </p>
        <ul className="list-disc list-inside pl-4 text-sm text-gray-800">
          <li>入会金：2,000円</li>
          <li>3か月までの休会は、料金を頂いておりません。</li>
          <li>
            講師が女性ということもあり、入会は原則として女性のみとさせて頂いております。（小学生までは性別を問いません）
          </li>
          <li>オンラインレッスンも可能です。</li>
          <li>
            受験対策コースも対応しておりますので、ご希望の方は講師までご相談ください。
          </li>
          <li>
            当日の欠席連絡の場合、振替レッスンは出来ませんのでご了承ください。
          </li>
        </ul>
      </section>
    </div>
  );
}
