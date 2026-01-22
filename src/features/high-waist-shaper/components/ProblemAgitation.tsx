import { AlertCircle, XCircle } from "lucide-react";
import Image from "next/image";
import { ReactElement } from "react";

const painPoints = [
  {
    title: "শাড়ি বা কামিজ পরলে বেলির ফ্যাট বুঝা যায়",
    description: "পাতলা কাপড় হলে তো আর লুকানোর উপায়ই থাকে না"
  },
  {
    title: "সারাদিন অস্বস্তি, বারবার এডজাস্ট করতে হয়",
    description: "চেয়ারে বসা, দাঁড়ানো, হাঁটা—সব সময় মনে হয় কিছু একটা ঠিক নেই"
  },
  {
    title: "ফিটিং ঠিক হয় না, নিজেকে কনফিডেন্ট লাগে নাহ",
    description: "ফিটিং ঠিক না হওয়ায় আয়নায় তাকালেই মনে হয় কিছু একটা ঠিক নেই"
  },
  {
    title: "শেপওয়্যার সারাদিন পরে থাকা যায় না",
    description: "এতটাই টাইট হয়ে থাকে যে সারাদিন পরে থাকাই কষ্টকর"
  }
];

export function ProblemAgitation(): ReactElement {
  return (
    <section className="bg-white py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900">
            অফিসে বা অনুষ্ঠানে কি আপনিও এমন <span className="text-rose-500">সমস্যায় পড়েন?</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Visual Container (Before/After) */}
          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              <div className="relative aspect-3/4 bg-slate-100 rounded-2xl overflow-hidden border border-rose-100">
                <div className="absolute top-4 left-4 bg-red-500 text-white text-xs font-bold px-3 py-1 rounded-full z-10">
                  BEFORE
                </div>
                <Image
                  src="/images/placeholder-before.jpg"
                  alt="Visible belly bulge"
                  fill
                  className="object-cover opacity-80"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                   <XCircle className="w-12 h-12 text-red-500 bg-white rounded-full p-1" />
                </div>
              </div>
              <div className="relative aspect-3/4 bg-rose-50 rounded-2xl overflow-hidden border border-rose-100 ring-4 ring-rose-50">
                <div className="absolute top-4 left-4 bg-green-500 text-white text-xs font-bold px-3 py-1 rounded-full z-10">
                  AFTER
                </div>
                <Image
                  src="/images/placeholder-after.jpg"
                  alt="Smooth silhouette"
                  fill
                  className="object-cover"
                />
                 <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur px-3 py-1.5 rounded-lg text-xs font-semibold text-green-700 shadow-sm">
                   ✨ পারফেক্ট লুক
                </div>
              </div>
            </div>
            
            {/* Decorative background blob */}
            <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-rose-100 blur-3xl opacity-30 rounded-full" />
          </div>

          {/* Pain Points Container */}
          <div className="grid grid-cols-1 gap-6">
            {painPoints.map((point, index) => (
              <div 
                key={index} 
                className="flex gap-4 p-6 bg-white border border-rose-100 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1"
              >
                <div className="shrink-0">
                  <div className="w-12 h-12 bg-rose-50 rounded-xl flex items-center justify-center text-rose-500">
                    <AlertCircle className="w-6 h-6" />
                  </div>
                </div>
                <div>
                  <h3 className="font-semibold text-lg text-slate-900 mb-1">
                    {point.title}
                  </h3>
                  <p className="text-slate-600 leading-relaxed">
                    {point.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
