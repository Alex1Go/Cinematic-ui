import HeroSection from "./components/HeroSection";
import ScrollSection from "./components/ScrollSection";
import Footer from "./components/Footer";
import "./index.css";

export default function App() {
  return (
    <>
      <HeroSection />
      <main>
        <ScrollSection
          index={1}
          title="Beyond Reality"
          text="We push the boundaries of digital storytelling with immersive visuals and seamless interactions."
        />
        <ScrollSection
          index={2}
          title="Cinematic Flow"
          text="Every scroll tells a story. Every transition is a scene. This is not a website — it's an experience."
        />
        <ScrollSection
          index={3}
          title="Infinite Possibilities"
          text="No limits. No rules. Just pure creative freedom in motion."
        />
      </main>
      <Footer />
    </>
  );
}
