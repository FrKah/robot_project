const team = [
  {
    name: "Antoine",
    role: "Main Dev",
    image: "/team/antoine.png",
    description:
      "Designed and implemented the grid-based navigation and movement logic."
  },
  {
    name: "Jacem",
    role: "Architect",
    image: "/team/jacem.jpg",
    description:
      "Designed the robot architecture and performed tests."
  },
  {
    name: "Frédéric",
    role: "Webdev",
    image: "/team/frederic.jpg",
    description:
      "Developed the website"
  }
];

export default function Team() {
  return (
    <div className="flex-1 bg-base-100 flex flex-col justify-center items-center">
      <h1 className="text-4xl font-bold text-center mb-12">
        Our Team
      </h1>

      <div className="flex flex-wrap justify-center gap-10 px-4">
        {team.map((member) => (
          <div
            key={member.name}
            className="card w-64 bg-base-200 shadow-xl rounded-full p-6
                       hover:scale-105 transition-transform border border-primary/30" 
          >
            <figure className="px-10 pt-10">
              <img
                src={member.image}
                alt={member.name}
                className="rounded-full w-28 h-28 object-cover border border-primary/30"
              />
            </figure>

            <div className="card-body items-center text-center p-4">
              <h2 className="card-title">{member.name}</h2>
              <span className="text-sm opacity-70">{member.role}</span>
              <p className="text-sm mt-2">{member.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}