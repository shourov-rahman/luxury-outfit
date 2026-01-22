import { Briefcase, Home, PartyPopper } from "lucide-react";
import Image from "next/image";
import { ReactElement } from "react";

const scenarios = [
  {
    title: "অফিস বা কর্মক্ষেত্রে",
    icon: Briefcase,
    image: "/images/placeholder-office.jpg",
    benefits: ["সারাদিন কমফোর্টেবল", "প্রফেশনাল লুক", "কাজে ফোকাস"]
  },
  {
    title: "পারিবারিক অনুষ্ঠান বা বিয়ে",
    icon: PartyPopper,
    image: "/images/placeholder-party.jpg",
    benefits: ["দীর্ঘ সময় আরাম", "ছবিতে কনফিডেন্ট লুক"]
  },
  {
    title: "বাসায় নিয়মিত ব্যবহারে",
    icon: Home,
    image: "/images/placeholder-home.jpg",
    benefits: ["হালকা ও নরম ফেব্রিক", "সারাদিন ব্যবহারযোগ্য"]
  }
];

export function UseCases(): ReactElement {
  return (
    <section className="bg-white py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900">
            যেখানেই থাকুন, থাকুক <span className="text-rose-500">আরামের নিশ্চয়তা</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {scenarios.map((scenario, index) => (
            <div 
              key={index} 
              className="group bg-white rounded-3xl overflow-hidden border border-rose-100 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
            >
              <div className="relative h-48 w-full bg-slate-100 overflow-hidden">
                <Image
                  src={scenario.image}
                  alt={scenario.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/60 to-transparent flex items-end p-6">
                  <div className="flex items-center gap-2 text-white font-bold text-lg">
                    <scenario.icon className="w-5 h-5 text-rose-400" />
                    {scenario.title}
                  </div>
                </div>
              </div>
              
              <div className="p-6">
                <ul className="space-y-3">
                  {scenario.benefits.map((benefit, i) => (
                    <li key={i} className="flex items-center gap-2 text-slate-700">
                      <div className="w-1.5 h-1.5 rounded-full bg-rose-500" />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
