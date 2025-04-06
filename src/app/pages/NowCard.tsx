"use client";

import { useTheme } from "../context/ThemeContext";
import Card from "../components/Card";
import clsx from "clsx";

export default function NowCard() {
  const { color } = useTheme();

  return (
    <div className="relative">
      <span className="absolute top-4 right-4 flex h-4 w-4">
        <span
          className={clsx(
            "animate-ping absolute inline-flex h-full w-full rounded-full opacity-75",
            `bg-${color}-500`
          )}
        ></span>
        <span
          className={clsx(
            "relative inline-flex rounded-full h-4 w-4 border-2 border-black",
            `bg-${color}-500`
          )}
        ></span>
      </span>

      <Card>
        <div className="space-y-2">
          <h2 className="text-lg font-semibold text-white">Now</h2>
          <p className="text-sm text-neutral-400 leading-relaxed">
            Currently working full-time as a{" "}
            <span className="text-white font-medium">fullstack developer</span>.
          </p>
        </div>
      </Card>
    </div>
  );
}
