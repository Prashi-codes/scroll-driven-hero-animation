import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function App() {
  const heroRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // Headline intro animation
      gsap.from(".headline", {
        opacity: 0,
        y: 40,
        duration: 1,
        ease: "power3.out",
      });

      // Statistics intro animation
      gsap.from(".stat", {
        opacity: 0,
        y: 30,
        duration: 0.7,
        stagger: 0.2,
        delay: 0.5,
        ease: "power2.out",
      });

      // Scroll-driven car animation
      gsap.to(".car", {
        x: () => {
          const car = document.querySelector(".car");

          if (!car) return -window.innerWidth;

          return -(window.innerWidth + car.offsetWidth);
        },

        ease: "none",

        scrollTrigger: {
          trigger: ".hero",
          start: "top top",
          end: "bottom top",
          scrub: 1,
        },
      });
    }, heroRef);

    return () => {
      ctx.revert();
    };
  }, []);
  return (
    <>
      {/* HERO SECTION */}
      <main ref={heroRef} className="hero">
        <div className="hero-content">
          {/* HEADLINE */}
          <h1 className="headline">
            W E L C O M E&nbsp;&nbsp; I T Z F I Z Z
          </h1>
          {/* STATISTICS */}
          <div className="stats">
            <div className="stat">
              <h2>58%</h2>
              <p>Increase in pick up point use</p>
            </div>
            <div className="stat">
              <h2>23%</h2>
              <p>Decrease in customer phone calls</p>
            </div>
            <div className="stat">
              <h2>27%</h2>
              <p>Increase in customer engagement</p>
            </div>
            <div className="stat">
              <h2>40%</h2>
              <p>Decrease in waiting time</p>
            </div>
          </div>
          {/* SCROLL TEXT */}
          <div className="scroll-text">
            SCROLL ↓
          </div>
          {/* CAR */}
          <div className="car-container">
            <img
  src={`${import.meta.env.BASE_URL}images/car.png`}
  alt="Car"
  className="car"
/>
          </div>
        </div>
      </main>
      {/* SECOND SECTION */}
      <section className="next-section">
        <h2>Built for Better Experiences</h2>

        <p>
          A smooth scroll-driven experience built using
          React, Tailwind CSS and GSAP.
        </p>
      </section>
    </>
  );
}
export default App;