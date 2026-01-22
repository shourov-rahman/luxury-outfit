import { Banknote, RefreshCw, ShieldCheck, Truck } from "lucide-react";
import { ReactElement } from "react";

const guarantees = [
  {
    icon: Banknote,
    title: "ক্যাশ অন ডেলিভারি",
    desc: "পণ্য হাতে পেয়ে টাকা দিন"
  },
  {
    icon: RefreshCw,
    title: "ফ্রি সাইজ এক্সচেঞ্জ",
    desc: "সাইজ না হলে পাল্টে নিন"
  },
  {
    icon: ShieldCheck,
    title: "কোয়ালিটি গ্যারান্টি",
    desc: "প্রিমিয়াম কোয়ালিটি"
  },
  {
    icon: Truck,
    title: "দ্রুত ডেলিভারি",
    desc: "সারা বাংলাদেশে ২-৩ দিনে"
  }
];

export function RiskReversal(): ReactElement {
  return (
    <section className="bg-linear-to-br from-rose-50 to-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="text-rose-500 font-semibold tracking-wide uppercase text-sm">আমাদের প্রতিশ্রুতি</span>
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mt-2">
            আপনার সুবিধাটাই আমাদের <span className="text-rose-500">অগ্রাধিকার</span>
          </h2>
          <p className="mt-4 text-slate-600">১০০০+ মানুষের নির্ভরতায় আমরা এগিয়ে চলছি</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {guarantees.map((item, index) => (
            <div 
              key={index} 
              className="bg-white p-6 rounded-2xl border border-rose-100 shadow-sm flex flex-col items-center text-center hover:-translate-y-1 transition-transform duration-300"
            >
              <div className="w-14 h-14 bg-rose-50 rounded-full flex items-center justify-center text-rose-500 mb-4">
                <item.icon className="w-7 h-7" />
              </div>
              <h3 className="font-bold text-slate-900 mb-1">{item.title}</h3>
              <p className="text-sm text-slate-500">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
