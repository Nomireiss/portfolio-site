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
    <footer className="py-12 md:py-24" style={{ background: "linear-gradient(90deg, #DAD3E3 0%, #C2C8DF 52%, #A9B6D6 100%)", borderTop: "1px solid #ECE3D6" }}>
      <div className="w-full max-w-[1280px] mx-auto px-6 flex flex-col gap-8 md:gap-12">

        {/* Top row */}
        <div className="flex flex-col sm:flex-row sm:items-center gap-6 sm:gap-12">
          <a href="#" aria-label="Home" className="shrink-0">
            <LogoIcon />
          </a>
          <div className="flex flex-wrap gap-x-8 gap-y-3">
            {navLinks.map(({ label, href }) => (
              <a key={label} href={href} className="text-sm leading-5 transition-colors" style={{ color: "rgba(46,58,92,0.8)" }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "#2E3A5C")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(46,58,92,0.8)")}
              >
                {label}
              </a>
            ))}
          </div>
        </div>

        {/* Divider */}
        <div style={{ borderTop: "1px solid rgba(46,58,92,0.15)" }} />

        {/* Bottom row */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 sm:gap-0">
          <span className="text-sm leading-5" style={{ color: "#2E3A5C" }}>
            © {new Date().getFullYear()} Nomi Reiss. All rights reserved.
          </span>
        </div>

      </div>
    </footer>
  );
}
