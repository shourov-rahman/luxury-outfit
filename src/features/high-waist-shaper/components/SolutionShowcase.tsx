import { ArrowRight, CheckCircle2 } from "lucide-react";
import Image from "next/image";
import { ReactElement } from "react";

const benefits = [
  {
    title: "সারাদিন আরাম",
    description: "অত্যন্ত উন্নত ও নরম ব্রিদেবল ফেব্রিক"
  },
  {
    title: "স্মুথ ফিগার",
    description: "এক্সট্রা ফ্যাট লুকিয়ে আপনাকে দেখায় সুন্দর"
  },
  {
    title: "পারফেক্ট ফিটিং",
    description: "শাড়ি বা কামিজ—সব পোশাকে মানানসই"
  },
  {
    title: "বারবার অ্যাডজাস্ট করার ঝামেলা নেই",
    description: "বিশেষ ডিজাইনের কারণে একবার পরলেই নিশ্চিন্ত থাকা যায়"
  }
];

export function SolutionShowcase(): ReactElement {
  return (
    <section className="bg-linear-to-br from-rose-50 via-white to-rose-50/50 py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            লাক্সারি আউটফিট: আপনার প্রতিদিনের <span className="text-rose-500">আস্থার সঙ্গী</span>
          </h2>
          <p className="text-lg text-slate-600">
            আমাদের প্রিমিয়াম শেপওয়্যার— বাংলাদেশের ওয়েদার উপযোগী
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* Product Image Container */}
          <div className="order-2 lg:order-1 relative">
             <div className="absolute inset-0 bg-linear-to-tr from-rose-200 to-amber-100 rounded-[2.5rem] transform -rotate-3 scale-105 opacity-60 blur-lg" />
             <div className="relative bg-white rounded-[2.5rem] shadow-2xl overflow-hidden border-4 border-white aspect-3/4">
                <Image
                  src="/images/placeholder-product.jpg"
                  alt="High Waist Shaper Product"
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-700"
                />
             </div>
          </div>

          {/* Benefits Container */}
          <div className="order-1 lg:order-2 flex flex-col gap-8">
            <div className="grid gap-6">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex gap-4">
                  <div className="shrink-0 mt-1">
                    <CheckCircle2 className="w-8 h-8 text-rose-500 fill-rose-50" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg text-slate-900 mb-1">
                      {benefit.title}
                    </h3>
                    <p className="text-slate-600">
                      {benefit.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-4">
              <button className="w-full sm:w-auto bg-slate-900 text-white rounded-xl px-10 py-5 font-medium hover:bg-slate-800 hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-3">
                এখনই অর্ডার করুন <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
