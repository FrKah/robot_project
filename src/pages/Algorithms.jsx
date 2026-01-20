import MermaidDiagram from "../components/MermaidDiagram";

export const Algorithms = () => {
  return (
    <main className="mx-auto max-w-8xl px-6 py-16 space-y-16">

      {/* Page title */}
      <header className="text-center space-y-4">
        <h1 className="text-5xl font-bold">
          Algorithms
        </h1>

        <p className="opacity-80 max-w-8xl mx-auto text-lg">
          Our design philosophy is <strong>slow but steady</strong>: we prioritize robustness,
          precise state tracking, and deterministic navigation over raw speed.
        </p>

        <p className="opacity-80 max-w-8xl mx-auto text-lg">
          The robot relies on an internal grid-based position model combined with
          sensor-driven corrections to remain reliable despite real-world uncertainty.
        </p>

        <p className="opacity-80 max-w-8xl mx-auto text-lg">
          This architecture ensures long-term reliability by explicitly separating
          navigation decisions from local sensing and manipulation.
        </p>
      </header>

      {/* PDF download */}
      <div className="flex justify-center">
        <a
          href="/KOB-E_Algorithms.pdf"
          download
          className="btn btn-primary btn-lg shadow-lg"
        >
          Download full algorithm document (PDF)
        </a>
      </div>

      {/* HIGH LEVEL ARCHITECTURE */}
      <section className="space-y-10">
        <h2 className="text-3xl font-semibold">
          High-Level Architecture : Dual-Pilot System
        </h2>

        <div className="card bg-gradient-to-br from-base-200 to-base-300 shadow-xl border border-primary/30">
          <div className="card-body space-y-4 text-lg opacity-80">
            <p>
              At the highest level, the robot follows a cyclic mission loop:
              selecting a target ore, navigating near it using a deterministic
              grid model, delegating local acquisition to a specialized pilot,
              then delivering and recalibrating before continuing.
            </p>

            <p>
              The robot operates using a two-pilot abstraction that cleanly
              separates global navigation from local object interaction.
              This separation simplifies reasoning, increases robustness,
              and allows tolerance to object displacement or absence.
            </p>

            <ul className="list-disc list-inside space-y-2">
              <li><strong>Pilot 1:</strong> Global navigation and mission planning</li>
              <li><strong>Pilot 2:</strong> Local sensing, object validation, and pickup</li>
            </ul>

            <MermaidDiagram src="/diagrams/global.mmd" />
          </div>
        </div>
      </section>

      {/* PILOT 1 */}
      <section className="space-y-10">
        <h2 className="text-3xl font-semibold">
          Pilot 1 : Grid Navigation & Mission Planning
        </h2>

        <div className="card bg-gradient-to-br from-base-200 to-base-300 shadow-xl border border-primary/30">
          <div className="card-body space-y-4 text-lg opacity-80">
            <p>
              Pilot 1 is responsible for all long-range reasoning and movement.
              It maintains the robot’s absolute position on an internal grid,
              tracks orientation, and computes deterministic paths toward
              known coordinates such as ore locations and the deposit box.
            </p>

            <p>
              Importantly, Pilot 1 never assumes that an object is exactly where
              expected. Instead, it navigates to a precomputed stopping point
              near the target and delegates all uncertainty handling to Pilot 2.
            </p>

            <ul className="list-disc list-inside space-y-2">
              <li>Absolute grid position tracking</li>
              <li>Orientation-aware navigation</li>
              <li>Deterministic long-range motion</li>
              <li>No direct dependency on object presence</li>
            </ul>

            <MermaidDiagram src="/diagrams/grid1.mmd" />
          </div>
        </div>
      </section>

      {/* PILOT 2 */}
      <section className="space-y-10">
        <h2 className="text-3xl font-semibold">
          Pilot 2 : Local Object Detection & Pickup
        </h2>

        {/* Sweep */}
        <div className="card bg-gradient-to-br from-base-200 to-base-300 shadow-xl border border-primary/30">
          <div className="card-body space-y-4 text-lg opacity-80">
            <h3 className="text-xl font-semibold">
              Gyroscope-Based Sweep Algorithm
            </h3>

            <p>
              Once Pilot 1 has positioned the robot near the expected ore location,
              Pilot 2 takes control to perform local sensing and validation.
            </p>

            <p>
              Using a controlled angular sweep, the robot rotates left and right
              while recording gyroscope angles where the ultrasonic sensor detects
              an object below a distance threshold.
            </p>

            <p>
              From this data, Pilot 2 computes both the angular span and the average
              angle of detected objects, enabling classification based on expected
              ore dimensions.
            </p>

            <MermaidDiagram src="/diagrams/sweep.mmd" />

            <p>
              This method allows the robot to tolerate slight ore displacement,
              missing ores, and nearby obstacles without breaking global
              navigation logic.
            </p>
          </div>
        </div>

        {/* Pickup */}
        <div className="card bg-gradient-to-br from-base-200 to-base-300 shadow-xl border border-primary/30">
          <div className="card-body space-y-4 text-lg opacity-80">
            <h3 className="text-xl font-semibold">
              Pickup & State Restoration
            </h3>

            <p>
              If a valid ore is detected, Pilot 2 performs a controlled pickup
              sequence: aligning with the object, advancing, grabbing, and lifting it.
            </p>

            <p>
              Crucially, Pilot 2 then reverses all movements it performed,
              restoring the robot to the exact position and orientation expected
              by Pilot 1 before returning control.
            </p>

            <p>
              If no valid ore is found, Pilot 2 reports failure and hands control
              back without altering Pilot 1’s internal state.
            </p>

            <MermaidDiagram src="/diagrams/pickup.mmd" />
          </div>
        </div>
      </section>

      {/* RECALIBRATION */}
      <section className="space-y-10">
        <h2 className="text-3xl font-semibold">
          Recalibration Strategy After Deposit
        </h2>

        <div className="card bg-gradient-to-br from-base-200 to-base-300 shadow-xl border border-primary/30">
          <div className="card-body space-y-4 text-lg opacity-80">
            <p>
              To prevent long-term drift caused by wheel slip, sensor noise,
              or small positioning errors, the robot performs an explicit
              recalibration step after each deposit.
            </p>

            <p>
              By aligning against known physical references such as the box
              and arena wall, resetting the gyroscope reference, and correcting
              its grid position, accumulated error never propagates across
              mission cycles.
            </p>

            <MermaidDiagram src="/diagrams/recalibration.mmd" />
          </div>
        </div>
      </section>

    </main>
  );
};

export default Algorithms;
