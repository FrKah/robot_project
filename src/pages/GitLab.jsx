import { FaGitlab, FaCodeBranch } from "react-icons/fa";

export default function GitLab() {
  return (
    <div className="flex-1 bg-base-100 flex flex-col items-center justify-center px-4 py-16">
      <div className="w-full max-w-2xl space-y-6">
        <div className="card bg-base-200 shadow-2xl border border-primary/30">
          <div className="card-body text-center items-center gap-6">
            <div className="text-6xl text-orange-500">
              <FaGitlab />
            </div>
            <h1 className="text-4xl font-bold">Project Source Code</h1>
            <p className="opacity-80">The complete source code of this project is available on GitLab.</p>
            <a
              href="https://gitlab.eurecom.fr/haggui/os-robot"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary btn-lg gap-2"
            >
              <FaCodeBranch />
              Open GitLab Repository
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
