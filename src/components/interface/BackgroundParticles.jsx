import React from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

const BackgroundParticles = () => {
  const particlesInit = async main => {
    await loadFull(main);
  };

  return (
    <Particles
      id="tsparticles"
      style={{ zIndex: -1 }}
      init={particlesInit}
      params={{
        particles: {
          color: {
            value: ["#ff0000", "#00ff00", "#0000ff"],
            random: true,
          },
          shape: {
            type: "images",
            images: [
              {
                src: require("../../particles/3138225.png"),
                width: 30,
                height: 30,
              },
              {
                src: require("../../particles/3142591.png"),
                width: 30,
                height: 30,
              },
              {
                src: require("../../particles/631665.png"),
                width: 30,
                height: 30,
              },
            ],
          },
          move: {
            enable: true,
            attract: {
              enable: true,
              rotateX: 590, // replace with the width of your container
              rotateY: 1000, // replace with the height of your container
            },
          },
          number: {
            value: 36, // total number of particles
          },
          size: {
            value: 30, // size of each particle
            random: false,
          },
          density: {
            enable: true,
            value_area: 800, // increases the density of the particles
          },
        },
        retina_detect: true,
      }}
    />
  );
};

export default BackgroundParticles;
