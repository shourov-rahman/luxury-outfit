import { ShoppingBag, Timer } from "lucide-react";
import { ReactElement } from "react";

export function Urgency(): ReactElement {
  return (
    <section className="bg-slate-900 py-12 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
         <div className="absolute top-0 left-0 w-64 h-64 bg-rose-500 rounded-full blur-[100px]" />
         <div className="absolute bottom-0 right-0 w-64 h-64 bg-amber-500 rounded-full blur-[100px]" />
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <div className="flex items-center justify-center gap-2 mb-4 text-amber-500 font-bold animate-pulse">
           <Timer className="w-5 h-5" />
           <span>LIMITED STOCK</span>
        </div>
        
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          চাহিদা বেশি, স্টক সীমিত
        </h2>
        
        <div className="bg-white/10 backdrop-blur-md inline-flex items-center gap-3 px-6 py-3 rounded-full border border-white/20 mb-8">
           <ShoppingBag className="w-5 h-5 text-rose-400" />
           <span className="font-medium">এই মাসে ২০০+ জন অর্ডার করেছেন</span>
        </div>

        <div>
           <button className="bg-rose-500 hover:bg-rose-600 text-white font-bold py-4 px-12 rounded-xl text-lg shadow-lg hover:shadow-rose-500/25 transition-all duration-300 transform hover:scale-105">
             এখনই অর্ডার করুন - ৳৬০০
           </button>
        </div>
      </div>
    </section>
  );
}
