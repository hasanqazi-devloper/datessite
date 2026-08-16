"tsx"
import { Send, CheckCircle2, Phone, Mail, MapPin } from "lucide-react";

export default function RfqSection() {
  return (
    <section id="rfq-section" className="bg-emerald-950 text-white py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden border-t border-emerald-900/60">
      {/* Decorative background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-emerald-500/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Info & Direct Contacts (5 Columns) */}
          <div className="lg:col-span-5 space-y-8">
            <div className="space-y-4">
              <span className="text-xs font-bold uppercase tracking-widest text-emerald-300 bg-emerald-900/80 px-3 py-1 rounded-full border border-emerald-700/50">
                Direct Inquiry & RFQ
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
                Request a Custom Quote Within 24 Hours
              </h2>
              <p className="text-emerald-100/70 text-base leading-relaxed">
                Looking for specific denier, cut length, or container shipping rates? Fill out the form or reach out directly to our export team.
              </p>
            </div>

            {/* Quick Benefits */}
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-emerald-100 text-sm font-medium">
                <div className="w-6 h-6 rounded-full bg-emerald-500/20 text-emerald-300 flex items-center justify-center flex-shrink-0">
                  <CheckCircle2 className="w-4 h-4" />
                </div>
                <span>Competitive wholesale factory pricing</span>
              </div>
              <div className="flex items-center gap-3 text-emerald-100 text-sm font-medium">
                <div className="w-6 h-6 rounded-full bg-emerald-500/20 text-emerald-300 flex items-center justify-center flex-shrink-0">
                  <CheckCircle2 className="w-4 h-4" />
                </div>
                <span>Complete export documentation support</span>
              </div>
              <div className="flex items-center gap-3 text-emerald-100 text-sm font-medium">
                <div className="w-6 h-6 rounded-full bg-emerald-500/20 text-emerald-300 flex items-center justify-center flex-shrink-0">
                  <CheckCircle2 className="w-4 h-4" />
                </div>
                <span>Flexible container load options</span>
              </div>
            </div>

            {/* Contact Details Box */}
            <div className="bg-emerald-900/40 border border-emerald-800/60 p-6 rounded-3xl space-y-4 backdrop-blur-md">
              <h3 className="font-bold text-white text-base">Direct Office Contact</h3>
              
              <div className="flex items-center gap-3 text-emerald-100/80 text-sm">
                <div className="w-9 h-9 rounded-xl bg-emerald-500/20 text-emerald-300 flex items-center justify-center flex-shrink-0">
                  <Phone className="w-4 h-4" />
                </div>
                <span>+98 (Tehran Office Inquiry)</span>
              </div>

              <div className="flex items-center gap-3 text-emerald-100/80 text-sm">
                <div className="w-9 h-9 rounded-xl bg-emerald-500/20 text-emerald-300 flex items-center justify-center flex-shrink-0">
                  <Mail className="w-4 h-4" />
                </div>
                <span>info@koushiartejarat.com</span>
              </div>

              <div className="flex items-center gap-3 text-emerald-100/80 text-sm">
                <div className="w-9 h-9 rounded-xl bg-emerald-500/20 text-emerald-300 flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-4 h-4" />
                </div>
                <span>Tehran, Iran • Global Export Hub</span>
              </div>
            </div>

          </div>

          {/* Right Column: High-Converting Dark Green RFQ Form (7 Columns) */}
          <div className="lg:col-span-7 bg-emerald-900/40 border border-emerald-800/60 p-8 sm:p-10 rounded-3xl backdrop-blur-md shadow-xl">
            <h3 className="text-2xl font-bold text-white mb-6">
              Submit Your Fiber Specifications
            </h3>

            <form onSubmit={(e) => e.preventDefault()} className="space-y-6">
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-emerald-200/80 mb-2">
                    Full Name *
                  </label>
                  <input 
                    type="text" 
                    required
                    placeholder="John Doe" 
                    className="w-full bg-emerald-950/60 border border-emerald-800/80 rounded-xl px-4 py-3 text-white placeholder-emerald-300/50 focus:outline-none focus:border-emerald-400 transition-colors text-sm shadow-sm"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-emerald-200/80 mb-2">
                    Company Name *
                  </label>
                  <input 
                    type="text" 
                    required
                    placeholder="Your Manufacturing Firm" 
                    className="w-full bg-emerald-950/60 border border-emerald-800/80 rounded-xl px-4 py-3 text-white placeholder-emerald-300/50 focus:outline-none focus:border-emerald-400 transition-colors text-sm shadow-sm"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-emerald-200/80 mb-2">
                    Email Address *
                  </label>
                  <input 
                    type="email" 
                    required
                    placeholder="john@company.com" 
                    className="w-full bg-emerald-950/60 border border-emerald-800/80 rounded-xl px-4 py-3 text-white placeholder-emerald-300/50 focus:outline-none focus:border-emerald-400 transition-colors text-sm shadow-sm"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-emerald-200/80 mb-2">
                    Select Product *
                  </label>
                  <select 
                    className="w-full bg-emerald-950/80 border border-emerald-800/80 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-emerald-400 transition-colors text-sm shadow-sm"
                  >
                    <option className="bg-emerald-950 text-white">Solid Polyester Fiber</option>
                    <option className="bg-emerald-950 text-white">Hollow Conjugated Fiber</option>
                    <option className="bg-emerald-950 text-white">Cotton-Type Polyester Fiber</option>
                    <option className="bg-emerald-950 text-white">Custom Specification</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-emerald-200/80 mb-2">
                    Estimated Quantity
                  </label>
                  <input 
                    type="text" 
                    placeholder="e.g. 1 Container / 20 Tons" 
                    className="w-full bg-emerald-950/60 border border-emerald-800/80 rounded-xl px-4 py-3 text-white placeholder-emerald-300/50 focus:outline-none focus:border-emerald-400 transition-colors text-sm shadow-sm"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-emerald-200/80 mb-2">
                    Destination Port / Country
                  </label>
                  <input 
                    type="text" 
                    placeholder="e.g. Port of Hamburg, Germany" 
                    className="w-full bg-emerald-950/60 border border-emerald-800/80 rounded-xl px-4 py-3 text-white placeholder-emerald-300/50 focus:outline-none focus:border-emerald-400 transition-colors text-sm shadow-sm"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-emerald-200/80 mb-2">
                  Additional Requirements
                </label>
                <textarea 
                  rows={4} 
                  placeholder="Specify Denier (e.g. 3D), Cut Length (e.g. 64mm), or siliconization preferences..."
                  className="w-full bg-emerald-950/60 border border-emerald-800/80 rounded-xl p-4 text-white placeholder-emerald-300/50 focus:outline-none focus:border-emerald-400 transition-colors text-sm shadow-sm"
                ></textarea>
              </div>

              <button 
                type="submit"
                className="w-full flex items-center justify-center gap-2 bg-emerald-400 hover:bg-emerald-300 text-emerald-950 font-bold py-4 px-8 rounded-xl shadow-lg shadow-emerald-500/20 hover:shadow-xl transition-all text-base cursor-pointer"
              >
                <span>Submit RFQ & Get Quote Within 24 Hours</span>
                <Send className="w-4 h-4" />
              </button>

            </form>
          </div>

        </div>

      </div>
    </section>
  );
}