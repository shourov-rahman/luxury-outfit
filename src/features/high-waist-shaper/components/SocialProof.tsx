import { Quote, Star } from "lucide-react";
import { ReactElement } from "react";

const testimonials = [
  {
    name: "জান্নাত আরা",
    rating: 5,
    quote: "প্রোডাক্ট অনেক ভালো আর পড়ে অনেক আরাম। পরার সাথে সাথে ২ থেকে ২.৫ পেট কম মনে হয়। সব মিলিয়ে আলহামদুলিল্লাহ"
  },
  {
    name: "ফারহানা ইসলাম",
    rating: 5,
    quote: "প্রোডাক্টের কোয়ালিটি খুবই ভালো। ব্যবহার করে ভালো লেগেছে। এটা কাজে দেয় মানে স্লিম করে সামান্য হলেও। খুব firm and fitting একটা ফিল দিবে। যে সাইজ এবং কালার চেয়েছি আলহামদুলিল্লাহ সেটাই পাইছি। ডেলিভারি ও সঠিক সময়ে ছিল"
  },
  {
    name: "আফসানা নূর",
    rating: 5,
    quote: "আমি সচরাচর রিভিউ দেই না খুব একটা। কিন্তু এই প্রোডাক্ট টা এতোই ভাল আর কম্ফোর্টেবল যে রিভিউ না দিয়ে পারলাম না। হাইলি রিকমেন্ডেট"
  },
  {
    name: "রাশেদ মাহমুদ",
    rating: 5,
    quote: "চমৎকার জিনিস, বৌকে কিনে দিছি। অনেক ভাল"
  },
  {
    name: "লাবিবা তাসনিম",
    rating: 5,
    quote: "প্রোডাক্টটা অনেক ভালো, গরমের মধ্যে পড়ার পরও অনেক কমফোর্টেবল লেগেছে আমার। আপনারাও নিতে পারেন, এটা পড়লে অনেক স্লিম দেখায়। সাইজ, প্যাকেজিং ওভারঅল সবকিছু ঠিক আছে, আমি ভাবি নাই এত ভালো প্রোডাক্ট পাব। ধন্যবাদ সেলারকে এত ভালো প্রোডাক্ট দেয়ার জন্য।"
  },
  {
    name: "শারমিন সুলতানা",
    rating: 5,
    quote: "onk sundor 1 ta jinis, onk comfortable, sobai nite paren, recommended"
  }
];

export function SocialProof(): ReactElement {
  return (
    <section className="bg-slate-50 py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900">
            ইতিমধ্যেই হাজারো নারী পেয়েছেন <span className="text-rose-500">কাঙ্ক্ষিত পরিবর্তন</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="bg-white rounded-2xl p-6 border border-rose-100 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col h-full"
            >
              <div className="flex items-center gap-2 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-amber-500 fill-amber-500" />
                ))}
              </div>
              
              <div className="relative mb-6 grow">
                 <Quote className="absolute -top-2 -left-2 w-8 h-8 text-rose-100 rotate-180" />
                 <p className="text-slate-600 relative z-10 pl-4 italic leading-relaxed">
                   &quot;{testimonial.quote}&quot;
                 </p>
              </div>

              <div className="flex items-center gap-3 pt-4 border-t border-slate-100">
                <div className="w-10 h-10 rounded-full bg-rose-100 text-rose-500 flex items-center justify-center font-bold text-lg">
                  {testimonial.name.charAt(0)}
                </div>
                <div>
                  <h4 className="font-semibold text-slate-900">{testimonial.name}</h4>
                  <p className="text-xs text-slate-500">ভেরিফাইড কাস্টমার</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
