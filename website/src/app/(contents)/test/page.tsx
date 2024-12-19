"use client"
import { useInView } from "framer-motion";
import { useRef } from "react";

const TestComponent = () => {
  const ref = useRef<HTMLDivElement | null>(null);
  const isInView = useInView(ref as React.RefObject<Element>, { once: true });

  console.log("Is in view:", isInView);

  return (
    <div
      ref={ref}
      style={{
        height: "100px",
        background: isInView ? "green" : "red",
        transform: isInView ? "translateY(0)" : "translateY(60px)",
        opacity: isInView ? 1 : 0,
        transition: "all 0.7s ease",
      }}
    >
      Test Animation
    </div>
  );
};

export default TestComponent;
