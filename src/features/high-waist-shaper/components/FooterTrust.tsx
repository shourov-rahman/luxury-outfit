import { Clock, Facebook, Mail, Phone } from "lucide-react";
import { ReactElement } from "react";

export function FooterTrust(): ReactElement {
  return (
    <footer className="bg-slate-50 border-t border-rose-100 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          
          {/* Brand Story */}
          <div className="space-y-4">
            <h3 className="font-bold text-xl text-slate-900">Luxury Outfit</h3>
            <p className="text-slate-600 text-sm leading-relaxed">
              আমরা বাংলাদেশের নারীদের জন্য প্রিমিয়াম কোয়ালিটির শেপওয়্যার ও লাইফস্টাইল পণ্য নিয়ে কাজ করছি। আমাদের লক্ষ্য—আপনাকে আত্মবিশ্বাসী ও সুন্দর করে তোলা।
            </p>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="font-bold text-lg text-slate-900">যোগাযোগ করুন</h3>
            <ul className="space-y-3 text-sm text-slate-600">
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-rose-500" />
                <span>01700-000000</span>
              </li>
              <li className="flex items-center gap-3">
                 {/* WhatsApp icon usually requires a custom SVG or Lucide PhoneOutgoing maybe? using Phone for now */}
                <div className="w-4 h-4 text-rose-500 font-bold border rounded-full flex items-center justify-center text-[10px]">W</div>
                <span>01700-000000 (WhatsApp)</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-rose-500" />
                <span>support@bdluxuryoutfit.com</span>
              </li>
              <li className="flex items-center gap-3">
                <Facebook className="w-4 h-4 text-rose-500" />
                <span>/luxuryoutfitbd</span>
              </li>
            </ul>
          </div>

          {/* Operating Hours */}
          <div className="space-y-4">
            <h3 className="font-bold text-lg text-slate-900">অফিস সময়</h3>
            <ul className="space-y-3 text-sm text-slate-600">
              <li className="flex items-start gap-3">
                <Clock className="w-4 h-4 text-rose-500 mt-0.5" />
                <div>
                  <p>শনি - বৃহস্পতি</p>
                  <p>সকাল ১০:০০ - রাত ৮:০০</p>
                </div>
              </li>
            </ul>
          </div>

           {/* Quick Links */}
           <div className="space-y-4">
            <h3 className="font-bold text-lg text-slate-900">প্রয়োজনীয় লিঙ্ক</h3>
            <ul className="space-y-2 text-sm text-slate-600">
              <li><a href="#" className="hover:text-rose-500 transition-colors">প্রাইভেসি পলিসি</a></li>
              <li><a href="#" className="hover:text-rose-500 transition-colors">শর্তাবলী</a></li>
              <li><a href="#" className="hover:text-rose-500 transition-colors">রিফান্ড পলিসি</a></li>
            </ul>
          </div>

        </div>

        <div className="border-t border-slate-200 pt-8 text-center text-sm text-slate-500">
          <p>© {new Date().getFullYear()} Luxury Outfit. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
