import { CSSProperties, ReactNode } from "react";
import { useReveal } from "@/hooks/useReveal";
import { cn } from "@/lib/utils";

interface RevealProps {
  children: ReactNode;
  delay?: number;
  className?: string;
  style?: CSSProperties;
  as?: "div" | "section" | "article" | "header" | "li" | "ul";
}

/**
 * Wraps children with a scroll-triggered fade/translate reveal.
 * Uses transform+opacity only. Honors prefers-reduced-motion.
 */
export const Reveal = ({
  children,
  delay = 0,
  className,
  style,
  as: As = "div",
}: RevealProps) => {
  const { ref, visible } = useReveal<HTMLDivElement>();
  const Component = As as any;
  return (
    <Component
      ref={ref}
      className={cn("reveal", visible && "is-visible", className)}
      style={{ transitionDelay: `${delay}ms`, ...style }}
    >
      {children}
    </Component>
  );
};

export default Reveal;
