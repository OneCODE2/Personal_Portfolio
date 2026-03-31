import { useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useTheme } from "../../theme/ThemeContext";
import "./ThemeBulbToggle.css";

const FRAGMENTS = [
  { x: -18, y: -42, rotate: -35 },
  { x: 15, y: -40, rotate: 20 },
  { x: -30, y: -20, rotate: -55 },
  { x: 26, y: -18, rotate: 60 },
  { x: -34, y: 6, rotate: -70 },
  { x: 34, y: 10, rotate: 80 },
  { x: -20, y: 28, rotate: -28 },
  { x: 20, y: 30, rotate: 25 },
];

const SHATTER_MS = 800;

function playGlassSound() {
  try {
    const audio = new Audio("/dragon-studio-glass-breaking-504033.mp3");
    audio.volume = 0.75;
    void audio.play();
  } catch {
    // Ignore playback failures (autoplay/user-policy restrictions).
  }
}

export default function ThemeBulbToggle() {
  const { isDark, setThemeMode, soundEnabled } = useTheme();
  const [isAnimating, setIsAnimating] = useState(false);
  const [fragmentMode, setFragmentMode] = useState(null);
  const reduceMotion = useReducedMotion();

  const triggerThemeTransition = () => {
    if (isAnimating) {
      return;
    }

    const targetTheme = isDark ? "light" : "dark";

    if (reduceMotion) {
      setThemeMode(targetTheme);
      return;
    }

    setIsAnimating(true);
    setFragmentMode(isDark ? "rebuild" : "shatter");

    if (!isDark && soundEnabled) {
      playGlassSound();
    }

    window.setTimeout(() => {
      setThemeMode(targetTheme);
      setIsAnimating(false);
      setFragmentMode(null);
    }, SHATTER_MS);
  };

  return (
    <div className="bulb-toggle-wrapper" aria-live="polite">
      <motion.button
        type="button"
        className={`bulb-toggle-button ${isDark ? "" : "bulb-toggle-button--lit"}`}
        aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
        aria-pressed={isDark}
        onClick={triggerThemeTransition}
        whileTap={{ scale: 0.96 }}
      >
        <motion.img
          src={isDark ? "/bulbimage/broken.png" : "/bulbimage/lit.png"}
          alt="Theme bulb"
          className={`bulb-image ${isDark ? "bulb-image--broken" : ""}`}
          animate={isDark ? { scale: 0.95, opacity: 0.75 } : { scale: [1, 1.05, 1], opacity: [0.9, 1, 0.9] }}
          transition={isDark ? { duration: 0.22 } : { duration: 2, repeat: Infinity, ease: "easeInOut" }}
        />
      </motion.button>

      <AnimatePresence>
        {fragmentMode && (
          <motion.div
            className="bulb-fragments"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            {FRAGMENTS.map((fragment, index) => (
              <motion.div
                key={`${fragmentMode}-${index}`}
                className="bulb-fragment"
                initial={{ x: 0, y: 0, rotate: 0, opacity: 0.95, scale: 1 }}
                animate={
                  fragmentMode === "shatter"
                    ? {
                        x: fragment.x,
                        y: fragment.y,
                        rotate: fragment.rotate,
                        opacity: 0,
                        scale: 0.66,
                      }
                    : {
                        x: fragment.x,
                        y: fragment.y,
                        rotate: fragment.rotate,
                        opacity: 0,
                        scale: 0.5,
                      }
                }
                transition={{
                  duration: fragmentMode === "shatter" ? 0.72 : 0.58,
                  ease: fragmentMode === "shatter" ? [0.2, 0.8, 0.2, 1] : [0.35, 1, 0.45, 1],
                  delay: index * 0.02,
                }}
              />
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}



