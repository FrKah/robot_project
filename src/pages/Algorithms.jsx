import { useEffect, useRef } from "react";
import MermaidDiagram from "../components/MermaidDiagram";

export const Algorithms = () => {
  const observerRef = useRef(null);

  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-in");
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -100px 0px" }
    );

    const elements = document.querySelectorAll(".fade-in-section");
    elements.forEach((el) => observerRef.current.observe(el));

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, []);

  return (
    <main className="mx-auto max-w-6xl px-6 py-16 space-y-16">

      {/* Page title */}
      <header className="text-center space-y-4 fade-in-section">
        <h1 className="text-5xl font-bold">
          Algorithms
        </h1>
        <p className="opacity-80 max-w-2xl mx-auto text-lg">
          This page presents the core algorithms used by the robot.
        </p>
      </header>

      {/* GRID SECTION */}
      <section className="space-y-10">
        <h2 className="text-3xl font-semibold fade-in-section">
          Grid Navigation & Pickup
        </h2>

        {/* Grid 1 */}
        <div className="card bg-gradient-to-br from-base-200 to-base-300 shadow-xl hover:shadow-2xl transition-all duration-300 border border-primary/30 fade-in-section">
          <div className="card-body space-y-4">
            <h3 className="text-xl font-semibold">
              Main Logic
            </h3>
            <p className="opacity-70">
              High-level mission flow combining grid navigation,
              object detection, pickup, and delivery.
            </p>
            <MermaidDiagram src="/diagrams/grid1.mmd" />
          </div>
        </div>

        {/* Grid 2 */}
        <div className="card bg-gradient-to-br from-base-200 to-base-300 shadow-xl hover:shadow-2xl transition-all duration-300 border border-primary/30 fade-in-section">
          <div className="card-body space-y-4">
            <h3 className="text-xl font-semibold">
              Forward Motion with Pickup Interrupt
            </h3>
            <p className="opacity-70">
              While moving forward, the robot continuously monitors
              the ultrasonic sensor and interrupts motion if an object
              is detected.
            </p>
            <MermaidDiagram src="/diagrams/grid3.mmd" />
          </div>
        </div>
      </section>

      {/* SWEEP SECTION */}
      <section className="space-y-10">
        <h2 className="text-3xl font-semibold">
          Obstacle Detection
        </h2>

        <div className="card bg-gradient-to-br from-base-200 to-base-300 shadow-xl hover:shadow-2xl transition-all duration-300 border border-primary/30">
          <div className="card-body space-y-4">
            <h3 className="text-xl font-semibold">
              Gyroscope-Based Sweep Algorithm
            </h3>
            <p className="opacity-70">
              The robot performs a left–right sweep and analyzes
              gyroscope feedback to detect unexpected deviations caused
              by obstacles interacting with the front grabber.
            </p>
            <MermaidDiagram src="/diagrams/sweep.mmd" />
          </div>
        </div>
      </section>

    </main>
  );
};

export default Algorithms;
