import React from "react";
import { LucideIcon, CircleAlert } from "lucide-react";

interface IconProps {
  name: string;
  size?: number;
  className?: string;
  fallback?: string;
}

const Icon: React.FC<IconProps> = ({
  name,
  size = 24,
  className = "",
  fallback,
}) => {
  try {
    const IconComponent = require("lucide-react")[name] as LucideIcon;
    if (IconComponent) {
      return <IconComponent size={size} className={className} />;
    }
  } catch (error) {
    // Icon not found, use fallback
  }

  if (fallback) {
    try {
      const FallbackIcon = require("lucide-react")[fallback] as LucideIcon;
      if (FallbackIcon) {
        return <FallbackIcon size={size} className={className} />;
      }
    } catch (error) {
      // Fallback icon not found either
    }
  }

  // Final fallback
  return <CircleAlert size={size} className={className} />;
};

export default Icon;
