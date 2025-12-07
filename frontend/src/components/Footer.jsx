import { FaGithub } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="relative mt-24 bg-black/40 backdrop-blur-md border-t border-white/10">
      <div className="max-w-6xl mx-auto px-6 py-12 flex flex-col items-center text-center gap-6">
        {/*  Center Logo */}
        <h1 className="text-4xl md:text-5xl font-bold">
          <span className="text-purple-400">lexi</span>
          <span className="text-white italic font-playfair">.dev</span>
        </h1>

        <a
          href="https://github.com/ftashmit/lexi.dev"
          target="_blank"
          rel="noopener noreferrer"
          className="
            flex items-center gap-3
            text-gray-300 hover:text-white
            transition-all duration-300
            hover:drop-shadow-[0_0_10px_#a855f7]
          "
        >
          <FaGithub className="text-2xl" />
          <span className="text-sm md:text-base">
            Visit our{" "}
            <span className="font-semibold hover:text-purple-500 transition-all duration-100">
              GitHub Repository
            </span>
          </span>
        </a>

        <div className="w-32 h-[1px] bg-gradient-to-r from-transparent via-purple-500 to-transparent"></div>

        <p className="text-gray-400 text-xs md:text-sm">
          © {new Date().getFullYear()} Sentiment Analyzer · Built by{" "}
          <span className="text-purple-400 font-medium">Ashmit Dutta</span>
        </p>
      </div>
    </footer>
  );
}
