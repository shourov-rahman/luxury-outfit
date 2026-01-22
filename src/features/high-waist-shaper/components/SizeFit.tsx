import { MessageCircle, RefreshCw } from "lucide-react";
import { ReactElement } from "react";

const sizeChart = [
  { size: "S", waist: "২৪-২৮", weight: "৪৫-৫৫" },
  { size: "M", waist: "২৮-৩২", weight: "৫৫-৬৫" },
  { size: "L", waist: "৩২-৩৬", weight: "৬৫-৭৫" },
  { size: "XL", waist: "৩৬-৪০", weight: "৭৫-৮৫" },
  { size: "XXL", waist: "৪০-৪৪", weight: "৮৫-৯৫" }
];

export function SizeFit(): ReactElement {
  return (
    <section className="bg-white py-16 md:py-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            সাইজ নিয়ে চিন্তা নেই—আমরা আছি পাশে
          </h2>
          <p className="text-lg text-slate-600">
            &quot;প্রথমবার অনলাইনে শেপওয়্যার কিনছি, সাইজ ঠিক হবে তো?&quot; এই প্রশ্ন আমরা প্রতিদিন শুনি। আর তাই আমরা নিশ্চিত করেছি—আপনার কোনো রিস্ক নেই। সাইজ চার্ট দেখে অর্ডার করুন নিশ্চিন্তে, আর ভুল হলে পাল্টে নিন বিনা খরচে।
          </p>
        </div>

        <div className="bg-white rounded-3xl shadow-lg border border-slate-100 overflow-hidden mb-12">
          <div className="bg-rose-500 p-4 text-center">
            <h3 className="text-white font-bold text-xl">সাইজ চার্ট (Size Chart)</h3>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-center">
              <thead>
                <tr className="bg-rose-50 text-slate-900">
                  <th className="py-4 px-6 font-semibold border-b border-rose-100">সাইজ</th>
                  <th className="py-4 px-6 font-semibold border-b border-rose-100">কোমর (ইঞ্চি)</th>
                  <th className="py-4 px-6 font-semibold border-b border-rose-100">ওজন (কেজি)</th>
                </tr>
              </thead>
              <tbody className="text-slate-700">
                {sizeChart.map((row, index) => (
                  <tr key={index} className="hover:bg-rose-50/50 transition-colors">
                    <td className="py-4 px-6 border-b border-slate-100 font-medium">{row.size}</td>
                    <td className="py-4 px-6 border-b border-slate-100">{row.waist}&quot;</td>
                    <td className="py-4 px-6 border-b border-slate-100">{row.weight} কেজি</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="bg-rose-50 rounded-2xl p-8 border border-rose-100 flex flex-col md:flex-row items-center gap-6">
          <div className="shrink-0 bg-white p-4 rounded-full shadow-sm text-rose-500">
            <RefreshCw className="w-8 h-8" />
          </div>
          <div className="grow text-center md:text-left">
            <h3 className="text-xl font-bold text-slate-900 mb-2">
              ফ্রি সাইজ এক্সচেঞ্জ গ্যারান্টি
            </h3>
            <p className="text-slate-600 mb-1">ভুল সাইজ হলে বিনামূল্যে পাল্টে দেওয়া হবে।</p>
            <ul className="text-sm text-slate-500 space-y-1">
              <li>• ডেলিভারির ৭ দিনের মধ্যে এক্সচেঞ্জ করুন</li>
              <li>• কোনো এক্সট্রা খরচ নেই</li>
            </ul>
          </div>
          <div className="shrink-0">
             <button className="bg-white border border-rose-200 text-slate-900 hover:bg-rose-500 hover:text-white hover:border-rose-500 px-6 py-3 rounded-xl font-medium transition-all duration-300 flex items-center gap-2 shadow-sm">
               <MessageCircle className="w-5 h-5" /> যোগাযোগ করুন
             </button>
          </div>
        </div>

      </div>
    </section>
  );
}
