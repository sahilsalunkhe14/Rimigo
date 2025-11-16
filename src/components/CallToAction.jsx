import { ArrowRight, Mail, User, Phone } from "lucide-react";
import { useState } from "react";

export function CallToAction() {
  const [email, setEmail] = useState("");
  const [focused, setFocused] = useState(false);

  return (
    <section id="calltoaction" className="relative py-32 px-6 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-800" />
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage:
            "url(https://images.pexels.com/photos/1659438/pexels-photo-1659438.jpeg?auto=compress&cs=tinysrgb&w=1920)",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div className="text-center lg:text-left">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading text-white mb-6 leading-tight">
            Ready for Your Next Adventure?
          </h2>

          <p className="text-xl text-white/90 mb-12 leading-relaxed font-light max-w-xl">
            Start planning your dream vacation today. Get personalized
            recommendations and exclusive travel offers in your inbox.
          </p>

          <form className="max-w-xl mx-auto lg:mx-0">
            <div
              className={`flex flex-col sm:flex-row gap-4 bg-white rounded-2xl p-3 shadow-2xl transition-all duration-300 ${
                focused ? "ring-4 ring-white/50" : ""
              }`}
            >
              <div className="flex-1 flex items-center px-4">
                <Mail size={20} className="text-slate-400 mr-3" />
                <input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  onFocus={() => setFocused(true)}
                  onBlur={() => setFocused(false)}
                  className="flex-1 py-3 bg-transparent outline-none text-slate-900"
                  required
                />
              </div>

              <button
                type="submit"
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-xl font-semibold flex items-center justify-center gap-2 transition-all hover:scale-105"
              >
                Start Planning
                <ArrowRight size={20} />
              </button>
            </div>
          </form>

          <p className="mt-6 text-sm text-white/75">
            No spam, ever. Unsubscribe anytime.
          </p>
        </div>

        <div className="bg-white rounded-3xl shadow-2xl p-10 backdrop-blur-lg">
          <h3 className="text-3xl font-heading text-slate-900 mb-6">
            Quick Contact
          </h3>

          <form className="space-y-5">
            <div className="flex items-center bg-slate-100 rounded-xl px-4 py-3">
              <User size={20} className="text-slate-500 mr-3" />
              <input
                type="text"
                placeholder="Your Name"
                className="flex-1 bg-transparent outline-none text-slate-800"
              />
            </div>

            <div className="flex items-center bg-slate-100 rounded-xl px-4 py-3">
              <Mail size={20} className="text-slate-500 mr-3" />
              <input
                type="email"
                placeholder="Email Address"
                className="flex-1 bg-transparent outline-none text-slate-800"
              />
            </div>

            <div className="flex items-center bg-slate-100 rounded-xl px-4 py-3">
              <Phone size={20} className="text-slate-500 mr-3" />
              <input
                type="text"
                placeholder="Phone Number"
                className="flex-1 bg-transparent outline-none text-slate-800"
              />
            </div>

            <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-4 rounded-xl font-semibold transition-all hover:scale-105 flex items-center justify-center gap-2">
              Contact Me
              <ArrowRight size={20} />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
