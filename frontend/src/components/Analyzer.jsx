import { useState } from "react";

export default function Analyzer() {
  const [text, setText] = useState("");
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function analyzeText() {
    if (!text.trim()) return;
    setLoading(true);
    setError("");
    setResult(null);

    try {
      const response = await fetch(
        `http://127.0.0.1:8001/api/analyze_review/?text=${encodeURIComponent(
          text
        )}`
      );
      const data = await response.json();
      if (data.error) setError(data.error);
      else setResult(data);
    } catch {
      setError("Cannot connect to Django backend.");
    }

    setLoading(false);
  }

  return (
    <section
      id="analyzer"
      className="
        relative min-h-screen flex items-center justify-center 
bg-gradient-to-b from-black via-[#AC99F0]/70 to-black
text-white px-4 overflow-hidden
      "
    >
      <div
        className="pointer-events-none absolute inset-0 z-0 
  bg-[radial-gradient(circle_at_center,rgba(0,0,0,0)_40%,rgba(0,0,0,0.85)_85%)]"
      ></div>

      <div className="w-full max-w-2xl mx-auto backdrop-blur-xl bg-black/40 border border-white/10 shadow-2xl rounded-3xl p-8 text-center">
        <h2 className="text-2xl md:text-3xl font-semibold mb-8">
          Analyze your comments in one click
        </h2>

        <textarea
          className="
            w-full min-h-[140px]
            bg-black/70 text-white
            border border-white/20
            rounded-xl p-4 mb-6
            focus:outline-none
            focus:ring-2 focus:ring-purple-500
            resize-none
          "
          placeholder="Type your text here..."
          value={text}
          onChange={(e) => setText(e.target.value)}
        />

        <button
          onClick={analyzeText}
          disabled={loading}
          className="
            inline-flex items-center justify-center
            px-10 py-3 rounded-xl font-semibold
            text-white bg-purple-500
            transition-all duration-200
            hover:shadow-[0_0_25px_#a855f7]
            hover:scale-105
            disabled:opacity-50 disabled:hover:scale-100
          "
        >
          {loading ? "Analyzing..." : "Analyze Now"}
        </button>

        {error && (
          <p className="text-red-400 mt-4 text-sm font-medium">{error}</p>
        )}

        {result && (
          <div className="mt-8 bg-black/70 border border-white/10 shadow-lg p-5 rounded-xl text-left">
            <h3 className="text-xl font-semibold mb-3 text-purple-200">
              Analysis Result
            </h3>

            <div className="space-y-2 text-sm text-gray-200">
              <p>
                <span className="text-purple-400 font-semibold">Language:</span>{" "}
                {result.language}
              </p>
              <p>
                <span className="text-purple-400 font-semibold">
                  Translated:
                </span>{" "}
                {result.translated}
              </p>
              <p>
                <span className="text-purple-400 font-semibold">
                  Sentiment:
                </span>{" "}
                {result.sentiment}
              </p>
              <p>
                <span className="text-purple-400 font-semibold">
                  Confidence:
                </span>{" "}
                {result.confidence}
              </p>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
