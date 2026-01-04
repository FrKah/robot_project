import MermaidDiagram from "../components/MermaidDiagram";

export const Algorithms = () => {
  return (
    <main className="mx-auto max-w-6xl px-6 py-16 space-y-16">

      {/* Page title */}
      <header className="text-center space-y-4">
        <h1 className="text-4xl font-bold">Algorithms</h1>
        <p className="opacity-70 max-w-2xl mx-auto">
          This page presents the core algorithms used by the robot for
          navigation, object pickup, and obstacle detection.
        </p>
      </header>

      {/* GRID SECTION */}
      <section className="space-y-10">
        <div className="flex items-center gap-3">
          <h2 className="text-3xl font-semibold">
            Grid Navigation & Pickup
          </h2>
        </div>

        {/* Grid 1 */}
        <div className="card bg-base-200 shadow-xl">
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
        <div className="card bg-base-200 shadow-xl">
          <div className="card-body space-y-4">
            <h3 className="text-xl font-semibold">
              Navigate To Logic
            </h3>
            <p className="opacity-70">
              The robot first aligns on the Y axis, then on the X axis,
              using gyroscope-based turns and forward motion.
            </p>
            <MermaidDiagram src="/diagrams/grid2.mmd" />
          </div>
        </div>

        {/* Grid 3 */}
        <div className="card bg-base-200 shadow-xl">
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
        <div className="flex items-center gap-3">
          <h2 className="text-3xl font-semibold">
            Obstacle Detection
          </h2>
        </div>

        <div className="card bg-base-200 shadow-xl">
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
