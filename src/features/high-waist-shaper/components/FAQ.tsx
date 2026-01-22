"use client";

import { Minus, Plus } from "lucide-react";
import { ReactElement, useState } from "react";

const faqs = [
  {
    question: "সাইজ ভুল হলে কী করব?",
    answer: "৭ দিনের মধ্যে বিনামূল্যে এক্সচেঞ্জ করতে পারবেন।"
  },
  {
    question: "আসলেই কি দীর্ঘক্ষণ পরে থাকা যায়?",
    answer: "অধিকাংশ ক্রেতা দীর্ঘ সময় পরে স্বাচ্ছন্দ্যবোধ করেছেন। যদিও ব্যক্তিভেদে অনুভূতি ভিন্ন হতে পারে।"
  },
  {
    question: "বারবার ধুলে কি সমস্যা হবে?",
    answer: "সাধারণ কাপড়ের মতোই ধোয়া যায়। যত্ন নিলে দীর্ঘদিন ব্যাবহার করতে পারবেন"
  },
  {
    question: "ডেলিভারি পেতে কতদিন লাগে?",
    answer: "ঢাকার মধ্যে সাধারণত ১–২ দিন, ঢাকার বাইরে ২–৩ দিন।"
  },
  {
    question: "পেমেন্ট কীভাবে করতে হবে?",
    answer: "ক্যাশ অন ডেলিভারি অথবা বিকাশ/নগদের মাধ্যমে পেমেন্ট করা যাবে।"
  },
  {
    question: "রিটার্নের সুবিধা আছে কি?",
    answer: "পণ্যে কোনো ত্রুটি থাকলে ৭ দিনের মধ্যে রিটার্ন বা রিফান্ড করা যাবে।"
  }
];

export function FAQ(): ReactElement {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="bg-white py-16 md:py-24">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900">
            সচরাচর জানতে চাওয়া <span className="text-rose-500">প্রশ্ন</span>
          </h2>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              className={`border rounded-2xl transition-all duration-300 ${
                openIndex === index 
                ? "border-rose-200 bg-rose-50/30 shadow-sm" 
                : "border-slate-100 hover:border-rose-100"
              }`}
            >
              <button
                onClick={() => setOpenIndex(index === openIndex ? null : index)}
                className="w-full text-left px-6 py-4 flex items-center justify-between gap-4 font-semibold text-slate-900"
              >
                <span>{faq.question}</span>
                {openIndex === index ? (
                  <Minus className="w-5 h-5 text-rose-500 shrink-0" />
                ) : (
                  <Plus className="w-5 h-5 text-slate-400 shrink-0" />
                )}
              </button>
              
              <div 
                className={`grid transition-all duration-300 ease-in-out ${
                  openIndex === index ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                }`}
              >
                <div className="overflow-hidden">
                  <div className="px-6 pb-4 text-slate-600 leading-relaxed">
                    {faq.answer}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
