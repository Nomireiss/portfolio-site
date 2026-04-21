function LogoIcon() {
  return (
    <img src="/Nomi Logo.png" alt="Nomi" style={{ height: "64px", width: "auto" }} />
  );
}

const navLinks = [
  { label: "Home", href: "#" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export default function Footer() {
  return (
    <footer className="border-t border-[#E5E5E5] py-12 md:py-24" style={{ backgroundColor: "#EFF0F6" }}>
      <div className="w-full max-w-[1280px] mx-auto px-6 flex flex-col gap-8 md:gap-12">

        {/* Top row */}
        <div className="flex flex-col sm:flex-row sm:items-center gap-6 sm:gap-12">
          <a href="#" aria-label="Home" className="shrink-0">
            <LogoIcon />
          </a>
          <div className="flex flex-wrap gap-x-8 gap-y-3">
            {navLinks.map(({ label, href }) => (
              <a key={label} href={href} className="text-[#737373] text-sm leading-5 hover:text-[#0A0A0A] transition-colors">
                {label}
              </a>
            ))}
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-[#E5E5E5]" />

        {/* Bottom row */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 sm:gap-0">
          <span className="text-[#737373] text-sm leading-5">
            © {new Date().getFullYear()} Nomi Reiss. All rights reserved.
          </span>
        </div>

      </div>
    </footer>
  );
}
