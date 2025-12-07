import LogoLoop from "./LogoLoop";
import {
  SiReact,
  SiVite,
  SiJavascript,
  SiTailwindcss,
  SiPython,
  SiDjango,
  SiFastapi,
  SiRender,
  SiVercel,
  SiGoogletranslate,
} from "react-icons/si";

export default function About() {
  const techLogos = [
    { node: <SiReact />, title: "React", href: "https://react.dev" },
    { node: <SiVite />, title: "Vite", href: "https://v3.vitejs.dev/" },
    {
      node: <SiJavascript />,
      title: "JavaScript",
      href: "https://www.javascript.com/",
    },
    {
      node: <SiTailwindcss />,
      title: "Tailwind CSS",
      href: "https://tailwindcss.com",
    },
    { node: <SiPython />, title: "Python", href: "https://www.python.org" },
    {
      node: <SiDjango />,
      title: "Django",
      href: "https://www.djangoproject.com",
    },
    {
      node: <SiFastapi />,
      title: "Fastapi",
      href: "https://fastapi.tiangolo.com/",
    },
    {
      node: <SiRender />,
      title: "Render",
      href: "https://render.com/",
    },
    {
      node: <SiVercel />,
      title: "Vercel",
      href: "https://vercel.com/",
    },
    {
      node: <SiGoogletranslate />,
      title: "Googletranslate",
      href: "https://translate.google.co.in/?sl=ur&tl=hi&op=translate",
    },
  ];

  return (
    <section
      id="about"
      className="relative text-center text-white overflow-hidden"
    >
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-4xl md:text-5xl mb-10">
          <span className="font-bold">About </span>
          <span className="font-bold text-purple-400">lexi</span>
          <span className="font-playfair italic text-white">.dev</span>
        </h2>

        <p className="text-gray-300 text-sm md:text-base max-w-3xl mx-auto leading-relaxed mb-16">
          The Sentiment Analysis Platform leverages advanced Natural Language
          Processing (NLP) and AI to interpret and evaluate the emotions behind
          user-generated text in real time. Built using{" "}
          <span className="text-purple-400 font-medium">React</span>,{" "}
          <span className="text-purple-400 font-medium">Tailwind CSS</span>, and
          a{" "}
          <span className="text-purple-400 font-medium">Django + FastAPI</span>{" "}
          backend, it helps CRM firms improve client understanding, automate
          feedback analysis, and make empathetic, data-driven business decisions
          — leading to stronger customer relationships and measurable growth.
        </p>

        <div className="relative overflow-hidden" style={{ height: "200px" }}>
          <LogoLoop
            logos={techLogos}
            speed={120}
            direction="left"
            logoHeight={48}
            gap={60}
            hoverSpeed={0}
            scaleOnHover
            fadeOut
            fadeOutColor="#000000"
            ariaLabel="Technology logos"
          />
        </div>
      </div>
    </section>
  );
}
