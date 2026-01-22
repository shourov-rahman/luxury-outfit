import { ArrowRight, Ruler } from "lucide-react";
import Image from "next/image";
import { ReactElement } from "react";

export function Hero(): ReactElement {
  return (
    <section className="bg-linear-to-br from-white via-rose-50/30 to-amber-600/5 py-16 md:py-24 lg:py-32 overflow-hidden relative">
      <div className="absolute -top-40 -right-40 w-80 h-80 bg-rose-300 rounded-full blur-3xl opacity-20" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* Content Container */}
          <div className="flex flex-col gap-8 text-center lg:text-left">
            <div className="flex flex-col gap-4">
              <span className="inline-block px-4 py-1.5 bg-rose-100 text-rose-500 font-semibold text-sm rounded-full w-fit mx-auto lg:mx-0">
                #1 Best Selling Shapewear
              </span>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 leading-tight">
                যেকোনো পোশাকেই ফিরে আসুক আপনার <span className="text-rose-500">হারানো আত্মবিশ্বাস</span> ও স্বাচ্ছন্দ্য!
              </h1>
              <p className="text-lg md:text-xl text-slate-700 max-w-2xl mx-auto lg:mx-0">
                সারাদিন কোনো অস্বস্তি ছাড়াই শাড়ি বা কামিজে পান একদম পারফেক্ট লুক
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button className="bg-rose-500 text-white rounded-xl px-8 py-4 font-medium hover:bg-rose-600 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 flex items-center justify-center gap-2">
                এখনই অর্ডার করুন <ArrowRight className="w-5 h-5" />
              </button>
              <button className="border-2 border-rose-500 text-rose-500 bg-transparent rounded-xl px-8 py-4 font-medium hover:bg-rose-50 hover:border-rose-600 transition-all duration-300 flex items-center justify-center gap-2">
                <Ruler className="w-5 h-5" /> সাইজ দেখুন
              </button>
            </div>

            <div className="mt-4 p-4 bg-white/80 backdrop-blur-sm border border-rose-100 rounded-2xl shadow-sm text-sm font-medium text-slate-700 flex flex-wrap justify-center lg:justify-start gap-4 sm:gap-6">
               <span className="flex items-center gap-2">✨ ফ্রি সাইজ এক্সচেঞ্জ</span>
               <span className="hidden sm:inline text-rose-300">|</span>
               <span className="flex items-center gap-2">💰 ক্যাশ অন ডেলিভারি</span>
               <span className="hidden sm:inline text-rose-300">|</span>
               <span className="flex items-center gap-2 text-rose-500 font-bold">🏷️ মূল্য: ৳৬০০</span>
            </div>
          </div>

          {/* Image Container */}
          <div className="relative mx-auto lg:mr-0 max-w-lg lg:max-w-none w-full">
            <div className="absolute inset-0 bg-linear-to-tr from-rose-500/20 to-amber-500/20 rounded-t-[3rem] rounded-b-[3rem] transform rotate-3 scale-105 blur-lg" />
            <div className="relative bg-white p-2 rounded-t-[3rem] rounded-b-[3rem] shadow-2xl border border-rose-100 overflow-hidden">
             {/* Placeholder for the hero image */}
              <div className="aspect-3/4 bg-slate-100 relative rounded-t-[2.5rem] rounded-b-[2.5rem] overflow-hidden group">
                 <Image 
                   src="/images/placeholder-hero.jpg" 
                   alt="Elegant woman wearing shapewear"
                   fill
                   className="object-cover group-hover:scale-105 transition-transform duration-700"
                   priority
                 />
                 <div className="absolute inset-x-0 bottom-0 bg-linear-to-t from-slate-900/50 to-transparent p-6 text-white text-center sm:text-left">
                    <p className="font-semibold text-lg">প্রিমিয়াম কোয়ালিটি</p>
                    <p className="text-sm opacity-90">১০০% কটন ইনার লেয়ার</p>
                 </div>
              </div>
            </div>
            
            {/* Float Elements */}
            <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-2xl shadow-xl border border-rose-100 animate-bounce delay-700">
               <div className="flex items-center gap-3">
                 <div className="flex -space-x-3">
                    <div className="w-10 h-10 rounded-full bg-rose-200 border-2 border-white" />
                    <div className="w-10 h-10 rounded-full bg-rose-300 border-2 border-white" />
                    <div className="w-10 h-10 rounded-full bg-rose-400 border-2 border-white" />
                 </div>
                 <div className="text-xs font-bold text-slate-800">
                    <span className="text-rose-500 text-sm">১০০০+</span><br/>হ্যাপি কাস্টমার
                 </div>
               </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
