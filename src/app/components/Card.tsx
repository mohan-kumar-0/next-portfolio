import { ReactNode } from "react";
import clsx from "clsx";
import { useTheme } from "../context/ThemeContext";

export default function Card({ children }: { children: ReactNode }) {
  const { color } = useTheme();

  return (
    <div
      className={clsx(
        "bg-black border border-neutral-800 rounded-xl p-6 shadow-md outline outline-1 outline-transparent transition-all duration-300",
        "text-sm font-light tracking-wide text-neutral-300 font-sans",
        color === "blue" && "hover:border-blue-500 hover:outline-blue-500",
        color === "green" && "hover:border-green-500 hover:outline-green-500",
        color === "purple" && "hover:border-purple-500 hover:outline-purple-500",
        color === "red" && "hover:border-red-500 hover:outline-red-500",
        color === "yellow" && "hover:border-yellow-500 hover:outline-yellow-500"
      )}
    >
      {children}
    </div>
  );
}
