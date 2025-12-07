export default function Navbar() {
  const navItems = [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Analyze", href: "#analyzer" },
    { label: "Contact", href: "#footer" },
  ];

  return (
    <nav
      className="
        sticky top-2 z-50
        mx-8 md:mx-20
        backdrop-blur-md bg-black/30
        border border-white/10
        shadow-xl
        rounded-3xl
        transition-all duration-300
      "
    >
      <div className="max-w-5xl mx-auto px-8 py-4 flex justify-between items-center">
        <h1 className="text-5xl">
          <span className="text-purple-400 font-bold">lexi</span>
          <span className="text-white italic font-playfair font-normal">
            .dev
          </span>
        </h1>

        <ul className="hidden md:flex space-x-12">
          {navItems.map((item) => (
            <li key={item.label}>
              <a
                href={item.href}
                className="text-white hover:text-purple-400 font-medium text-lg transition-colors duration-200"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        <button className="md:hidden text-purple-400 text-2xl">☰</button>
      </div>
    </nav>
  );
}
