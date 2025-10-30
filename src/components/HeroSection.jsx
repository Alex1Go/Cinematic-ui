import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export default function HeroSection() {
  const videoRef = useRef(null);
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const parallax1 = useRef(null);
  const parallax2 = useRef(null);

  useEffect(() => {
    // ----- GSAP ScrollTrigger -----
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".hero",
        start: "top top",
        end: "bottom top",
        scrub: 1,
      },
    });

    tl.to(titleRef.current, { y: -200, scale: 0.8, opacity: 0.7 })
      .to(subtitleRef.current, { y: -100, opacity: 0.5 }, 0)
      .to(parallax1.current, { y: -300 }, 0)
      .to(parallax2.current, { y: -150 }, 0);

    // ----- Video loop -----
    const video = videoRef.current;
    if (video) {
      video.playbackRate = 0.7;
      video.play().catch(() => {});
      video.addEventListener("ended", () => video.play());
    }
  }, []);

  return (
    <section className="hero">
      {/* 1. Видео‑фон */}
      <video
        ref={videoRef}
        className="bg-video"
        muted
        playsInline
        preload="auto"
      >
        <source src="/hero-loop.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* 2. Параллакс‑слои (из public) */}
      <img
        ref={parallax1}
        src="/layer2.png"
        className="parallax layer1"
        alt="Parallax background layer 1"
      />
      <img
        ref={parallax2}
        src="/layer1.png"
        className="parallax layer2"
        alt="Parallax background layer 2"
      />

      {/* 3. Текст */}
      <div className="hero-content">
        <h1 ref={titleRef}>ZERO LIMITS</h1>
        <p ref={subtitleRef}>Break through the boundaries of imagination</p>
      </div>
    </section>
  );
}
