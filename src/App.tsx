import About from "./components/About";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";

export default function App() {
  return (
    <div className="overflow-x-hidden text-neutral-300 antialiased selection:bg-purple-300 selection:text-purple-900 size-full">
      <div className="fixed left-0 top-0 -z-10 size-full">
        <div className="absolute top-0 z-[-2] w-screen h-screen bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]" />
      </div>
      <div className="container mx-auto px-8">
        <Navbar />
        <Hero />
        <About />
      </div>
    </div>
  );
}