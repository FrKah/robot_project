import { useEffect, useRef, useState } from "react";
import mermaid from "mermaid";

mermaid.initialize({
  startOnLoad: false,
  theme: "dark"
});

export default function MermaidDiagram({ src }) {
  const containerRef = useRef(null);
  const [diagram, setDiagram] = useState("");

  // Load the .mmd file
  useEffect(() => {
    if (!src) return;

    fetch(src)
      .then((res) => {
        if (!res.ok) throw new Error("Failed to load Mermaid file");
        return res.text();
      })
      .then(setDiagram)
      .catch(console.error);
  }, [src]);

  // Render Mermaid AFTER DOM is ready
  useEffect(() => {
    if (!diagram || !containerRef.current) return;

    const render = async () => {
      try {
        containerRef.current.innerHTML = "";

        const { svg } = await mermaid.render(
          "mermaid-" + Math.random().toString(36).slice(2),
          diagram
        );

        containerRef.current.innerHTML = svg;
      } catch (err) {
        console.error("Mermaid render error:", err);
        containerRef.current.innerHTML =
          "<pre>Mermaid rendering failed</pre>";
      }
    };

    // IMPORTANT: defer to next paint
    requestAnimationFrame(render);
  }, [diagram]);

  return <div ref={containerRef} className="mermaid-diagram" />;
}
