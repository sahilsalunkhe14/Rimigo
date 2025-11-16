import { Globe, Instagram, Twitter, Facebook, Mail } from 'lucide-react';

const footerLinks = {
  destinations: ['Japan', 'Iceland', 'New Zealand', 'Morocco', 'Peru', 'Greece'],
  company: ['About Us', 'How it Works', 'Careers', 'Press', 'Blog'],
  support: ['Help Center', 'Contact Us', 'Travel Insurance', 'Terms of Service', 'Privacy Policy'],
  connect: ['Newsletter', 'Travel Community', 'Partner with Us', 'Affiliate Program']
};

export function Footer() {
  return (
    <footer className="bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-12">
          <div className="lg:col-span-1">
            <a
              href="/"
              className="flex items-center gap-2 text-2xl font-semibold mb-4"
              aria-label="Rimigo home"
            >
              <Globe size={28} aria-hidden="true" />
              Rimigo
            </a>
            <p className="text-slate-400 leading-relaxed mb-6">
              Making vacations effortless, one journey at a time.
            </p>
            <div className="flex gap-4">
              <a
                href="#"
                className="text-slate-400 hover:text-white transition-colors"
                aria-label="Follow us on Instagram"
              >
                <Instagram size={20} />
              </a>
              <a
                href="#"
                className="text-slate-400 hover:text-white transition-colors"
                aria-label="Follow us on Twitter"
              >
                <Twitter size={20} />
              </a>
              <a
                href="#"
                className="text-slate-400 hover:text-white transition-colors"
                aria-label="Follow us on Facebook"
              >
                <Facebook size={20} />
              </a>
              <a
                href="#"
                className="text-slate-400 hover:text-white transition-colors"
                aria-label="Email us"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-semibold text-white mb-4">Destinations</h3>
            <ul className="space-y-3">
              {footerLinks.destinations.map((link) => (
                <li key={link}>
                  <a
                    href="#"
                    className="text-slate-400 hover:text-white transition-colors"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-white mb-4">Company</h3>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link}>
                  <a
                    href="#"
                    className="text-slate-400 hover:text-white transition-colors"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-white mb-4">Support</h3>
            <ul className="space-y-3">
              {footerLinks.support.map((link) => (
                <li key={link}>
                  <a
                    href="#"
                    className="text-slate-400 hover:text-white transition-colors"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-white mb-4">Connect</h3>
            <ul className="space-y-3">
              {footerLinks.connect.map((link) => (
                <li key={link}>
                  <a
                    href="#"
                    className="text-slate-400 hover:text-white transition-colors"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-slate-400 text-sm">
              &copy; {new Date().getFullYear()} Rimigo. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm">
              <a href="#" className="text-slate-400 hover:text-white transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-slate-400 hover:text-white transition-colors">
                Terms of Service
              </a>
              <a href="#" className="text-slate-400 hover:text-white transition-colors">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
