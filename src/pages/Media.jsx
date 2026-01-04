import { useState } from "react";
import { FaPlay } from "react-icons/fa";

const media = [
  {
    type: "image",
    src: "/media/robot1.jpg",
    title: "Happy Robot"
  },
  {
    type: "video",
    src: "/media/robot-demo.mp4",
    title: "Autonomous navigation demo"
  },
  {
    type: "video",
    src: "/media/home_vid.mp4",
    title: "Pickup mechanism"
  },
];

export default function Media() {
  const [selected, setSelected] = useState(null);

  return (
    <div className="flex-1 bg-base-100 px-6 py-16">
      <h1 className="text-4xl font-bold text-center mb-4">
        Media Gallery
      </h1>
      <p className="text-center opacity-70 mb-12">
        Photos and videos showcasing the robot in action
      </p>

      {/* Gallery grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {media.map((item, index) => (
          <div
            key={index}
            className="card bg-base-200 shadow-xl cursor-pointer
                       hover:scale-105 transition-transform"
            onClick={() => setSelected(item)}
          >
            <figure className="relative">
              {item.type === "image" ? (
                <img
                  src={item.src}
                  alt={item.title}
                  className="h-56 w-full object-cover"
                />
              ) : (
                <>
                  <video
                    src={item.src}
                    className="h-56 w-full object-cover"
                    muted
                  />
                  <div className="absolute inset-0 flex items-center justify-center bg-black/40">
                    <FaPlay className="text-4xl text-white" />
                  </div>
                </>
              )}
            </figure>

            <div className="card-body p-4">
              <h2 className="card-title text-base">
                {item.title}
              </h2>
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      {selected && (
        <div className="modal modal-open">
          <div className="modal-box max-w-[95vw] max-h-[95vh] w-auto p-6">
            <h3 className="font-bold text-lg mb-4">
              {selected.title}
            </h3>

            {selected.type === "image" ? (
              <img
                src={selected.src}
                alt={selected.title}
                className="max-w-full max-h-[75vh] rounded cursor-pointer mx-auto"
                onClick={() => setSelected(null)}
              />
            ) : (
              <video
                src={selected.src}
                controls
                autoPlay
                className="max-w-full max-h-[75vh] rounded cursor-pointer mx-auto"
                onClick={() => setSelected(null)}
              />
            )}

            <div className="modal-action">
              <button
                className="btn"
                onClick={() => setSelected(null)}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
