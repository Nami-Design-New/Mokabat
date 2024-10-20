import { useEffect, useState } from "react";
import { loadSlim } from "@tsparticles/slim";
import Particles, { initParticlesEngine } from "@tsparticles/react";

export default function ParticlesComponent() {
  const [init, setInit] = useState(false);

  useEffect(() => {
    const initParticles = async () => {
      await initParticlesEngine(async (engine) => {
        await loadSlim(engine);
      });
      setInit(true);
    };

    initParticles();
  }, []);

  const particlesLoaded = (container) => {
    console.log(container);
  };

  return (
    init && (
      <Particles
        id="tsparticles"
        particlesLoaded={particlesLoaded}
        options={{
          fpsLimit: 120,

          interactivity: {
            events: {
              onHover: {
                enable: true,
                mode: "repulse",
              },
              resize: true,
            },

            modes: {
              repulse: {
                distance: 200,
                duration: 0.1,
              },
            },
          },

          particles: {
            color: {
              value: "#ffffff",
            },

            move: {
              direction: "none",
              enable: true,
              outModes: {
                default: "bounce",
              },
              random: false,
              speed: 0.2,
              straight: false,
            },

            number: {
              density: {
                enable: true,
                area: 800,
              },
              value: 50,
            },

            opacity: {
              value: 0.5,
            },

            shape: {
              type: "star",
            },

            size: {
              value: { min: 0.5, max: 1 },
            },
          },
          detectRetina: true,
        }}
      />
    )
  );
}
