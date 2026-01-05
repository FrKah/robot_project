import { FaGitlab, FaCodeBranch } from "react-icons/fa";

export default function Code() {
  return (
    <div className="flex-1 bg-base-100 flex items-center justify-center px-4">
      <div className="card bg-base-200 shadow-2xl max-w-xl w-full border border-primary/30">
        <div className="card-body text-center items-center gap-6">
          
          {/* Icon */}
          <div className="text-6xl text-orange-500">
            <FaGitlab />
          </div>

          {/* Title */}
          <h1 className="text-4xl font-bold">
            Project Source Code
          </h1>

          {/* Description */}
          <p className="opacity-80">
            The complete source code of this project is available on GitLab.
          </p>

          {/* CTA Button */}
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
  );
}
