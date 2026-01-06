import { useState } from "react";
import { FaPlay, FaImage, FaVideo } from "react-icons/fa";

const media = [
  {
    type: "image",
    src: "/media/robot1.jpg",
    title: "Happy Robot"
  },
  {
    type: "image",
    src: "/media/gripper_rotation.gif",
    title: "Grabber Architecture"
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
  {
    type: "video",
    src: "/media/pickup_to_box.mp4",
    title: "Pickup to box"
  },
];

export default function Media() {
  const [selected, setSelected] = useState(null);

  return (
    <div className="flex-1 bg-base-100 px-6 py-16">
      <div className="text-center space-y-4 max-w-4xl mx-auto mb-12">
        <h1 className="text-5xl font-bold">
          Media Gallery
        </h1>
        <p className="opacity-80 text-lg">
          Photos and videos showcasing the robot in action
        </p>
      </div>

      {/* Gallery grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {media.map((item, index) => (
          <div
            key={index}
            className="card bg-base-200 shadow-xl cursor-pointer
                       hover:scale-105 hover:shadow-2xl transition-all duration-300
                       border border-primary/20 overflow-hidden group"
            onClick={() => setSelected(item)}
          >
            <figure className="relative overflow-hidden">
              {item.type === "image" ? (
                <>
                  <img
                    src={item.src}
                    alt={item.title}
                    className="h-56 w-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute top-3 right-3">
                    <FaImage className="text-2xl text-white drop-shadow-lg" />
                  </div>
                </>
              ) : (
                <>
                  <video
                    src={item.src}
                    className="h-56 w-full object-cover transition-transform duration-500 group-hover:scale-110"
                    muted
                  />
                  <div className="absolute inset-0 flex items-center justify-center bg-black/40 group-hover:bg-black/60 transition-all duration-300">
                    <FaPlay className="text-4xl text-white drop-shadow-lg group-hover:scale-125 transition-transform duration-300" />
                  </div>
                  <div className="absolute top-3 right-3">
                    <FaVideo className="text-2xl text-white drop-shadow-lg" />
                  </div>
                </>
              )}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </figure>

            <div className="card-body p-4">
              <h2 className="card-title text-base flex items-center gap-2">
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
