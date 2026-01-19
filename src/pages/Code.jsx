import { useState } from "react";

export default function Code() {
  const [copied, setCopied] = useState(false);

  const handleCopy = (text) => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const crossCompile = `# Install cross-compiler on the host (if needed)
sudo apt-get install -y gcc-arm-linux-gnueabi`;

  const sshConnect = `# Connect to EV3 by SSH (replace <ROBOT_IP>)
ssh robot@<ROBOT_IP>
# Default password: maker`;

  const updatePackages = `# Update packages and install toolchain
sudo apt-get update && sudo apt-get upgrade -y
sudo apt-get install -y gcc make build-essential git`;

  const installDevEnv = `# Install ev3dev-c (run on the robot as /home/robot)
cd /home/robot
git clone https://github.com/in4lio/ev3dev-c.git
cd ev3dev-c && git submodule update --init --recursive
cd source/ev3 && make && sudo make install
# Install shared libraries
make shared && sudo make shared-install`;

  const projectSetup = `# Clone project repository (host or robot)
git clone git@gitlab.eurecom.fr:haggui/os-robot.git
cd os-robot`;

  const compileRun = `# Configure robot IP (example) and build+run
./setup_ip <ROBOT_IP>
make run-main`;
  return (
    <div className="flex-1  bg-base-100 flex flex-col items-center justify-center px-4 py-16">
      <div className="w-full max-w-6xl space-y-6">
        
        <header className="text-center">
          <h1 className="text-4xl font-bold">Setup Tutorial</h1>
        </header>

        <h2 className="text-3xl text-center font-semibold">
          On Robot (To run our scripts or yours)
        </h2>

        <div className="grid gap-8 md:grid-cols-2">
        {/* SSH Connect Card */}
        <div className="card bg-base-200 shadow-xl border border-primary/30">
          <div className="card-body space-y-4">
            <h2 className="text-2xl font-semibold">1. Connect to EV3 (SSH)</h2>
            <p className="opacity-80">Establish an SSH session to the EV3 after connecting it to internet.</p>
            <div className="bg-base-100 rounded-lg p-4 border border-primary/20">
              <pre className="overflow-x-auto text-sm font-mono text-primary-content whitespace-pre-wrap break-words">
                <code>{sshConnect}</code>
              </pre>
            </div>
          </div>
        </div>

        {/* Update Packages Card */}
        <div className="card bg-base-200 shadow-xl border border-primary/30">
          <div className="card-body space-y-4">
            <h2 className="text-2xl font-semibold">2. Update Robot Packages</h2>
            <p className="opacity-80">Update the OS and install build tools on the robot.</p>
            <div className="bg-base-100 rounded-lg p-4 border border-primary/20">
              <pre className="overflow-x-auto text-sm font-mono text-primary-content whitespace-pre-wrap break-words">
                <code>{updatePackages}</code>
              </pre>
            </div>
          </div>
        </div>

        {/* Project Setup Card */}
        <div className="card bg-base-200 shadow-xl border border-primary/30">
          <div className="card-body space-y-4">
            <h2 className="text-2xl font-semibold">3. Project Setup</h2>
            <p className="opacity-80">Clone the robot project repository to host or robot.</p>
            <div className="bg-base-100 rounded-lg p-4 border border-primary/20">
              <pre className="overflow-x-auto text-sm font-mono text-primary-content whitespace-pre-wrap break-words">
                <code>{projectSetup}</code>
              </pre>
            </div>
          </div>
        </div>

        {/* Compile & Run Card */}
        <div className="card bg-base-200 shadow-xl border border-primary/30">
          <div className="card-body space-y-4">
            <h2 className="text-2xl font-semibold">4. Compile & Run</h2>
            <p className="opacity-80">Configure the robot IP and use the project's Make targets.</p>
            <div className="bg-base-100 rounded-lg p-4 border border-primary/20">
              <pre className="overflow-x-auto text-sm font-mono text-primary-content whitespace-pre-wrap break-words">
                <code>{compileRun}</code>
              </pre>
            </div>
          </div>
        </div>
        </div>

        <h2 className="text-3xl text-center font-semibold">
          On Host Machine (To make your own scripts from the comfort of your PC)
        </h2>

        {/* Cross Compile Card */}
        <div className="card bg-base-200 shadow-xl border border-primary/30">
          <div className="card-body space-y-4">
            <h2 className="text-2xl font-semibold">1. Cross Compilation</h2>
            <p className="opacity-80">Install the cross-compiler on your host machine.</p>
            <div className="bg-base-100 rounded-lg p-4 border border-primary/20">
              <pre className="overflow-x-auto text-sm font-mono text-primary-content whitespace-pre-wrap break-words">
                <code>{crossCompile}</code>
              </pre>
            </div>
          </div>
        </div>

        {/* Install Dev Env Card */}
        <div className="card bg-base-200 shadow-xl border border-primary/30">
          <div className="card-body space-y-4">
            <h2 className="text-2xl font-semibold">2. Install Development Environment</h2>
            <p className="opacity-80">Clone and build the `ev3dev-c` libraries used by the project.</p>
            <div className="bg-base-100 rounded-lg p-4 border border-primary/20">
              <pre className="overflow-x-auto text-sm font-mono text-primary-content whitespace-pre-wrap break-words">
                <code>{installDevEnv}</code>
              </pre>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}