import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Analyzer from "./components/Analyzer";
import Footer from "./components/Footer";
import About from "./components/About";

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <About />
        <Analyzer />
      </main>
      <Footer />
    </div>
  );
}

export default App;
