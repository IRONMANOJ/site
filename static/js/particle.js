
      particlesJS("particles-js", {
        particles: {
          number: {
            value: 100, // Number of particles
            density: {
              enable: true,
              value_area: 800,
            },
          },
          color: {
            value: ["#ff0000", "#ffff00", "#00ff00", "#0000ff", "#ff00ff"], // Colors for the particles
          },
          shape: {
            type: "circle", // Shape of particles
            stroke: {
              width: 0,
              color: "#000000",
            },
            polygon: {
              nb_sides: 5, // More sides for complexity
            },
          },
          opacity: {
            value: 0.7, // Particle opacity
            random: false,
          },
          size: {
            value: 5,
            random: true,
            anim: {
              enable: true, // Enable size animation for bursting effect
              speed: 1,
              size_min: 0.1,
              sync: false,
            },
          },
          line_linked: {
            enable: false, // Disable linking lines for a cleaner burst effect
          },
          move: {
            enable: true,
            speed: 4, // Speed of particle movement
            direction: "none",
            random: true,
            straight: false,
            out_mode: "out", // Particles move out of view
            bounce: false,
          },
        },
        interactivity: {
          detect_on: "canvas",
          events: {
            onhover: {
              enable: true,
              mode: "push", // Push particles out on hover
            },
            onclick: {
              enable: true,
              mode: "push", // Push particles out on click
            },
            resize: true,
          },
          modes: {
            push: {
              particles_nb: 20, // Number of particles to push out
            },
            remove: {
              particles_nb: 2,
            },
          },
        },
        retina_detect: true,
      });