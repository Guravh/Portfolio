import { useState, useEffect } from "react";
import AnimatedCursor from "animated-cursor";
const CustomCursor = () =>
  function CustomCursor() {
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
      setMounted(true);
    }, []);

    if (!mounted) return null;

    const AnimatedCursor = require("animated-cursor").default;
    return (
      <AnimatedCursor
        innerSize={8}
        outerSize={32}
        innerScale={1}
        outerScale={2}
        outerAlpha={0}
        hasBlendMode={true}
        innerStyle={{
          backgroundColor: "var(--accent)",
        }}
        outerStyle={{
          border: "2px solid var(--accent)",
          backgroundColor: "transparent",
        }}
      />
    );
  };

export default CustomCursor;
