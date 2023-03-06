const resources = {
    background: {
      small: "../Assets/Images/background-small.jpg",
      medium: "../Assets/Images/background-medium.jpg",
      large: "../Assets/Images/background-large.jpg",
    },
    pattern: "../Assets/Images/glow.png",
  };
  
  const sounds = {
    shared: {
      volume: 0.5,
    },
    players: {
      click: {
        sound: { src: ["../Assets/Sounds/click.mp3"] },
        settings: { oneAtATime: true }
      },
      typing: {
        sound: { src: ["../Assets/Sounds/typing.mp3"] },
        settings: { oneAtATime: true }
      },
      deploy: {
        sound: { src: ["../Assets/Sounds/deploy.mp3"] },
        settings: { oneAtATime: true }
      },
      success: {
        sound: {
          src: ["../Assets/Sounds/success.mp3"],
          volume: 0.2,
        },
        settings: { oneAtATime: true }
      },
      abort: {
        sound: { src: ["../Assets/Sounds/abort.mp3"] },
        settings: { oneAtATime: true }
      },
      warning: {
        sound: { src: ["../Assets/Sounds/warning.mp3"] },
        settings: { oneAtATime: true }
      },
    }
  };
  
  const theme = {
    color: {
      content: "#a1ecfb",
    },
    padding: 20,
    responsive: {
      small: 600,
      medium: 800,
      large: 1200
    },
    typography: {
      headerFontFamily: '"Titillium Web", "sans-serif"',
    },
  };
  
  export {
    resources,
    sounds,
    theme,
  };