import React, { useRef, useEffect } from "react";
import VanillaTilt from "vanilla-tilt";


const TechProject = () => {
  const tiltRef = useRef(null);

  useEffect(() => {
    VanillaTilt.init(tiltRef.current, {
      max: 25,
      speed: 400,
      glare: true,
      "max-glare": 0.5,
    });
    return () => tiltRef.current?.vanillaTilt.destroy();
  }, []);

  return (
    <div className="container mx-auto mt-20 mb-20 text-white">
      <div
        ref={tiltRef}
        className="w-44 h-72 bg-white rounded-lg flex items-center justify-center"
        data-tilt
      >
        <h1 className="text-black text-center">Hover Me</h1>
      </div>
    </div>
  );
};

export default TechProject;
