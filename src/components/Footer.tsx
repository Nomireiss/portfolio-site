function LogoIcon() {
  return (
    <img src="/Nomi Logo.png" alt="Nomi" style={{ height: "64px", width: "auto" }} />
  );
}

const navLinks = ["Home", "About Us", "Contact", "Support", "FAQ"];
const legalLinks = ["Privacy Policy", "Terms of Service", "Cookies Settings"];

export default function Footer() {
  return (
    <footer className="border-t border-[#E5E5E5] bg-[#F5F5F5]/60 py-12 md:py-24">
      <div className="w-full max-w-[1280px] mx-auto px-6 flex flex-col gap-8 md:gap-12">

        {/* Top row */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 md:gap-0">
          <div className="flex flex-col sm:flex-row sm:items-center gap-6 sm:gap-12">
            <a href="#" aria-label="Home" className="shrink-0">
              <LogoIcon />
            </a>
            <div className="flex flex-wrap gap-x-8 gap-y-3">
              {navLinks.map((link) => (
                <a key={link} href="#" className="text-[#737373] text-sm leading-5 hover:text-[#0A0A0A] transition-colors">
                  {link}
                </a>
              ))}
            </div>
          </div>

          {/* Email subscription */}
          <div className="flex items-center gap-2 w-full sm:w-auto">
            <input
              type="email"
              placeholder="Your email"
              className="flex-1 sm:w-60 h-9 px-3 py-1 bg-transparent text-sm text-[#737373] rounded-lg outline outline-1 outline-[#E5E5E5] shadow-sm focus:outline-[#171717] focus:outline-2 transition-all"
            />
            <button className="h-9 px-4 py-2 bg-[#171717] text-[#FAFAFA] text-sm font-medium rounded-lg hover:bg-[#333] transition-colors shrink-0">
              Subscribe
            </button>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-[#E5E5E5]" />

        {/* Bottom row */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 sm:gap-0">
          <span className="text-[#737373] text-sm leading-5">
            Copyright 2048 © shadcndesign.com
          </span>
          <div className="flex flex-wrap gap-x-8 gap-y-2">
            {legalLinks.map((link) => (
              <a key={link} href="#" className="text-[#737373] text-sm leading-5 hover:text-[#0A0A0A] transition-colors">
                {link}
              </a>
            ))}
          </div>
        </div>

      </div>
    </footer>
  );
}
