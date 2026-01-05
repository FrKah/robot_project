export default function Home() {
  return (
    <div className="flex-1 bg-base-100 flex flex-col justify-center items-center relative overflow-hidden">
      {/* Background video */}
      <video
        className="absolute inset-0 w-full h-full object-cover"
        autoPlay
        muted
        loop
        playsInline
      >
        <source src="/media/home_vid.mp4" type="video/mp4" />
      </video>

      {/* Dark overlay for text readability */}
      <div className="absolute inset-0 bg-black/50" />

      {/* Content */}
      <div className="max-w-xl px-4 text-center relative z-10">
        <h1 className="mb-5 text-5xl font-bold text-white">
          Robot Grabber
        </h1>
        <p className="mb-8 opacity-90 text-white">
          Catch phrase
        </p>

        <div className="flex flex-wrap justify-center gap-4">
          <a href="/algorithms" className="btn btn-primary hover:scale-110 transition-all duration-300 shadow-lg hover:shadow-primary/50">
            Algorithms
          </a>
          <a href="/robot-architecture" className="btn btn-outline hover:scale-110 transition-all duration-300 shadow-lg">
            Architecture
          </a>
          <a href="/media" className="btn btn-outline hover:scale-110 transition-all duration-300 shadow-lg">
            Media
          </a>
          <a href="/team" className="btn btn-secondary hover:scale-110 transition-all duration-300 shadow-lg hover:shadow-secondary/50">
            Team
          </a>
        </div>
      </div>
    </div>
  );
}
