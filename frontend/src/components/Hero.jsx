import DarkVeil from "./DarkVeil";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative w-full min-h-screen flex items-center justify-center text-center text-white overflow-hidden"
    >
      <div className="absolute inset-0 z-0">
        <DarkVeil />
      </div>

      <div className="relative z-10 max-w-2xl mx-auto px-5">
        <h2 className="text-9xl md:text-7xl font-bold mb-5">
          Where <span className="italic font-playfair font-light">words</span>{" "}
          meet{" "}
          <span className="italic font-playfair font-light">emotions...</span>
        </h2>

        <p className="text-sm md:text-base mb-10 mt-10 font-normal">
          Every word tells a story, we listen between the lines,
          <br />
          Find meaning in emotions, see texts through the AI’s eyes, <br />
          Your data, now with{" "}
          <span className="animated-gradient-text">feelings</span>.
        </p>

        <a
          href="#analyzer"
          className="relative inline-block px-6 py-3 rounded-lg font-medium text-white border-2 border-transparent transition-all duration-300 overflow-hidden group"
        >
          <span className="absolute inset-0 rounded-lg p-[2px] bg-[linear-gradient(90deg,#000,#7e22ce,#000,#7e22ce,#000)] bg-[length:200%_100%] animate-border-move group-hover:animate-border-move-fast">
            <span className="block h-full w-full rounded-lg bg-black"></span>
          </span>

          <span className="relative z-10 group-hover:text-purple-300">
            Get Started
          </span>
        </a>
      </div>
    </section>
  );
}
