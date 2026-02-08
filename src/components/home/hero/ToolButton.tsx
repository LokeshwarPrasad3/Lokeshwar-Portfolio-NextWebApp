import React from "react";

interface ToolButtonProps {
  children: React.ReactNode;
  variant?: "primary" | "secondary";
  className?: string;
  icon?: any;
  onClick?: () => void;
}

export const ToolButton = ({
  children,
  variant = "primary",
  className = "",
  icon: Icon,
  onClick,
}: ToolButtonProps) => {
  const isPrimary = variant === "primary";
  return (
    <button
      onClick={onClick}
      className={`flex cursor-pointer items-center gap-2 rounded-md px-6 py-2 text-base font-medium transition-all duration-200 ${
        isPrimary
          ? // Primary: Pink -> Purple Gradient, Flat, No Shadow
            "bg-linear-to-r from-pink-500 to-purple-600 text-white hover:opacity-90"
          : // Secondary: Transparent, Border
            "text-foreground hover:bg-secondary/20 border border-gray-300 bg-transparent dark:border-gray-700"
      } ${className} `}
    >
      {Icon && <Icon size={18} />}
      <span>{children}</span>
    </button>
  );
};
