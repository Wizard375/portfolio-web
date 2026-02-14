import React, { useEffect, useState } from "react";

const StarBackground = () => {
  const [stars, setStars] = useState([]);
  const [meteors, setMeteors] = useState([]);
  const [isDark, setIsDark] = useState(() =>
    document.documentElement.classList.contains("dark"),
  );

  // Detect theme changes
  useEffect(() => {
    const checkTheme = () => {
      setIsDark(document.documentElement.classList.contains("dark"));
    };

    checkTheme();

    const observer = new MutationObserver(checkTheme);
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    generateStars();
    generateMeteors();

    const handleResize = () => {
      generateStars();
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const generateStars = () => {
    const numberOfStars = Math.floor(
      (window.innerWidth * window.innerHeight) / 9000,
    );

    const newStars = [];

    for (let i = 0; i < numberOfStars; i++) {
      newStars.push({
        id: i,
        size: Math.random() * 3 + 1,
        x: Math.random() * 100,
        y: Math.random() * 100,
        opacity: Math.random() * 0.5 + 0.3,
        animationDuration: Math.random() * 4 + 2,
        hue: Math.random() * 360, // for colorful stars
      });
    }

    setStars(newStars);
  };

  const generateMeteors = () => {
    const numberOfMeteors = 4;
    const newMeteors = [];

    for (let i = 0; i < numberOfMeteors; i++) {
      newMeteors.push({
        id: i,
        size: Math.random() * 2 + 1,
        x: Math.random() * 100,
        y: Math.random() * 50,
        delay: Math.random(),
        animationDuration: Math.random() * 3 + 3,
      });
    }

    setMeteors(newMeteors);
  };

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {/* LIGHT MODE NEBULA BACKGROUND */}
      {!isDark && (
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-96 h-96 bg-purple-200 rounded-full blur-3xl opacity-40" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-200 rounded-full blur-3xl opacity-40" />
          <div className="absolute top-1/2 left-1/3 w-72 h-72 bg-pink-200 rounded-full blur-3xl opacity-30" />
        </div>
      )}

      {/* STARS */}
      {stars.map((star) => (
        <div
          key={star.id}
          className="absolute rounded-full animate-pulse-subtle"
          style={{
            width: star.size + "px",
            height: star.size + "px",
            left: star.x + "%",
            top: star.y + "%",
            opacity: star.opacity,
            animationDuration: star.animationDuration + "s",
            background: isDark ? "white" : `hsl(${star.hue}, 80%, 70%)`,
            boxShadow: isDark
              ? "0 0 10px rgba(255,255,255,0.5)"
              : "0 0 15px rgba(139,92,246,0.7)",
          }}
        />
      ))}

      {/* METEORS */}
      {meteors.map((meteor) => (
        <div
          key={meteor.id}
          className="absolute animate-meteor rounded-full"
          style={{
            width: meteor.size * 60 + "px",
            height: meteor.size * 2 + "px",
            left: meteor.x + "%",
            top: meteor.y + "%",
            animationDelay: meteor.delay + "s",
            animationDuration: meteor.animationDuration + "s",
            background: isDark
              ? "linear-gradient(to right, white, transparent)"
              : "linear-gradient(to right, #8b5cf6, transparent)",
            boxShadow: isDark
              ? "0 0 12px rgba(255,255,255,0.7)"
              : "0 0 20px rgba(139,92,246,0.8)",
          }}
        />
      ))}
    </div>
  );
};

export default StarBackground;
