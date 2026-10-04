import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function App() {
  const heroRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // ==========================================
      // INTRO ANIMATION
      // ==========================================

      gsap.from(".headline", {
        opacity: 0,
        y: 40,
        duration: 1,
        ease: "power3.out",
      });

      gsap.from(".stat", {
        opacity: 0,
        y: 30,
        duration: 0.7,
        stagger: 0.2,
        delay: 0.5,
        ease: "power2.out",
      });

      // ==========================================
      // CAR + SCROLL ANIMATION
      // ==========================================

      const car = document.querySelector(".car");

      if (!car) return;

      const timeline = gsap.timeline({
        scrollTrigger: {
          trigger: ".hero",
          start: "top top",
          end: "bottom top",
          scrub: 1,
          invalidateOnRefresh: true,
        },
      });

      // ==========================================
      // CAR MOVEMENT
      // ==========================================

      timeline.fromTo(
        car,
        {
          // Completely outside the right side
          x: () => window.innerWidth,
        },
        {
          // Completely outside the left side
          x: () => {
            const carWidth = car.getBoundingClientRect().width;

            return -(window.innerWidth + carWidth);
          },
          ease: "none",
          duration: 1,
        },
        0
      );

      // ==========================================
      // MESSAGE 1
      // ==========================================

      timeline.fromTo(
        ".message-1",
        {
          opacity: 0,
          y: 30,
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.08,
          ease: "power2.out",
        },
        0.18
      );

      timeline.to(
        ".message-1",
        {
          opacity: 0,
          y: -30,
          duration: 0.08,
        },
        0.35
      );

      // ==========================================
      // MESSAGE 2
      // ==========================================

      timeline.fromTo(
        ".message-2",
        {
          opacity: 0,
          y: 30,
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.08,
          ease: "power2.out",
        },
        0.43
      );

      timeline.to(
        ".message-2",
        {
          opacity: 0,
          y: -30,
          duration: 0.08,
        },
        0.60
      );

      // ==========================================
      // MESSAGE 3
      // ==========================================

      timeline.fromTo(
        ".message-3",
        {
          opacity: 0,
          y: 30,
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.08,
          ease: "power2.out",
        },
        0.68
      );

      timeline.to(
        ".message-3",
        {
          opacity: 0,
          y: -30,
          duration: 0.08,
        },
        0.88
      );

      ScrollTrigger.refresh();
    }, heroRef);

    return () => {
      ctx.revert();
    };
  }, []);

  return (
    <main ref={heroRef} className="hero">
      <div className="hero-content">

        {/* CHANGING TEXT ABOVE HEADLINE */}

        <div className="car-message message-1">
          INNOVATION
        </div>

        <div className="car-message message-2">
          BETTER EXPERIENCE
        </div>

        <div className="car-message message-3">
          POWERED BY TECHNOLOGY
        </div>


        {/* MAIN HEADLINE */}

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


        {/* CAR */}

        <div className="car-container">

          <img
            src={`${import.meta.env.BASE_URL}images/car.png`}
            alt="Car"
            className="car"
          />

        </div>


        {/* SCROLL INDICATOR */}

        <div className="scroll-text">
          SCROLL ↓
        </div>

      </div>
    </main>
  );
}

export default App;