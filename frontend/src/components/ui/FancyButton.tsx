import React from "react";
import clsx from "clsx";

interface FancyButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?:
    | "primary"
    | "danger"
    | "outline-primary"
    | "outline-danger"
    | "gray";
}

const FancyButton = ({
  children,
  className,
  variant = "primary",
  ...props
}: FancyButtonProps) => {
  const base =
    "rounded-lg px-6 py-3 font-semibold transition duration-300 focus:outline-none cursor-pointer";

  const variants = {
    primary:
      "bg-blue-600 text-white hover:bg-blue-700 focus:ring-2 focus:ring-blue-400",
    danger:
      "bg-red-600 text-white hover:bg-red-700 focus:ring-2 focus:ring-red-400",
    "outline-primary":
      "border border-blue-600 text-blue-600 hover:bg-blue-600 focus:ring-2 focus:ring-blue-200 hover:text-white",
    "outline-danger":
      "border border-red-600 text-red-600 hover:bg-red-600 focus:ring-2 focus:ring-red-200 hover:text-white",
    gray: "bg-gray-200 text-gray-800 hover:bg-gray-300 focus:ring-2 focus:ring-gray-400",
  };

  return (
    <button className={clsx(base, variants[variant], className)} {...props}>
      {children}
    </button>
  );
};

export default FancyButton;
