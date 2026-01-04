export const RobotArchitecture = () => {
  return (
    <main className="mx-auto max-w-6xl px-6 py-16 space-y-16">

      {/* Page header */}
      <header className="text-center space-y-4">
        <h1 className="text-4xl font-bold">Robot Architecture</h1>
        <p className="opacity-70 max-w-3xl mx-auto">
          This page presents the mechanical and electronic architecture of the robot,
          built using the LEGO EV3 Mindstorms kit, and explains how each component
          contributes to the project objectives.
        </p>
      </header>

      {/* PLATFORM OVERVIEW */}
      <section className="card bg-base-200 shadow-xl">
        <div className="card-body space-y-4">
          <h2 className="text-2xl font-semibold">
            EV3 Platform Overview
          </h2>
          <p className="opacity-80">
            The robot is built around the LEGO EV3 Mindstorms platform, which provides
            a programmable control unit, modular motors, and a variety of sensors.
            This platform was chosen for its robustness, modularity, and suitability
            for rapid prototyping of autonomous robots.
          </p>
          <p className="opacity-80">
            The EV3 brick acts as the central controller, executing the navigation,
            pickup, and obstacle detection algorithms while interfacing with all
            motors and sensors in real time.
          </p>
        </div>
      </section>

      {/* ACTUATION */}
      <section className="space-y-6">
        <h2 className="text-3xl font-semibold">
          Actuation System
        </h2>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="card bg-base-200 shadow-xl">
            <div className="card-body space-y-3">
              <h3 className="text-xl font-semibold">
                Drive Motors & Locomotion
              </h3>
              <p className="opacity-80">
                Two large EV3 motors are used for differential drive locomotion.
                This configuration allows the robot to move forward, backward,
                and rotate in place, which is essential for precise grid navigation.
              </p>
              <p className="opacity-80">
                Wheel rotation is converted into linear displacement, enabling
                controlled movement across discrete grid units.
              </p>
            </div>
          </div>

          <div className="card bg-base-200 shadow-xl">
            <div className="card-body space-y-3">
              <h3 className="text-xl font-semibold">
                Grabber and Lift Mechanism
              </h3>
              <p className="opacity-80">
                A dedicated motor controls a front-mounted grabber designed to
                securely capture objects detected by the ultrasonic sensor.
              </p>
              <p className="opacity-80">
                An additional lift motor raises the grabbed object to prevent
                ground contact during transport, ensuring stable motion while
                carrying items.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SENSORS */}
      <section className="space-y-6">
        <h2 className="text-3xl font-semibold">
          Sensor System
        </h2>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="card bg-base-200 shadow-xl">
            <div className="card-body space-y-3">
              <h3 className="text-xl font-semibold">
                Ultrasonic Sensor
              </h3>
              <p className="opacity-80">
                The ultrasonic sensor is mounted at the front of the robot and
                continuously measures the distance to nearby objects.
              </p>
              <p className="opacity-80">
                It enables real-time object detection during movement and triggers
                the pickup sequence when an object enters the predefined range.
              </p>
            </div>
          </div>

          <div className="card bg-base-200 shadow-xl">
            <div className="card-body space-y-3">
              <h3 className="text-xl font-semibold">
                Gyroscope Sensor
              </h3>
              <p className="opacity-80">
                The gyroscope sensor provides angular feedback, allowing the robot
                to perform precise rotations and maintain accurate orientation
                during navigation.
              </p>
              <p className="opacity-80">
                It is also used in the sweep-based obstacle detection algorithm to
                detect unexpected deviations caused by physical contact with obstacles.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* MECHANICAL DESIGN */}
      <section className="card bg-base-200 shadow-xl">
        <div className="card-body space-y-4">
          <h2 className="text-2xl font-semibold">
            Mechanical Design Choices
          </h2>
          <p className="opacity-80">
            The robot was designed with stability and robustness in mind. The
            grabber is positioned at the front to maximize interaction with objects,
            while the wheelbase ensures balanced weight distribution.
          </p>
          <p className="opacity-80">
            The large front grabber influences the robot’s interaction with obstacles,
            which motivated the use of a gyroscope-based sweep algorithm instead of
            relying solely on distance sensors.
          </p>
        </div>
      </section>

      {/* OPTIONAL MEDIA */}
      <section className="text-center opacity-70">
        <p>
          Photos and videos illustrating the mechanical design are available
          in the Media section.
        </p>
      </section>

    </main>
  );
};

export default RobotArchitecture;
