"use client";

import Card from "../components/Card";
import { useTheme } from "../context/ThemeContext";
import clsx from "clsx";

const COLORS = ["purple", "blue", "green", "red", "yellow"];

const colorMap = {
  purple: {
    border: "border-purple-500",
    ring: "ring-purple-400",
    bg: "bg-purple-500",
  },
  blue: {
    border: "border-blue-500",
    ring: "ring-blue-400",
    bg: "bg-blue-500",
  },
  green: {
    border: "border-green-500",
    ring: "ring-green-400",
    bg: "bg-green-500",
  },
  red: {
    border: "border-red-500",
    ring: "ring-red-400",
    bg: "bg-red-500",
  },
  yellow: {
    border: "border-yellow-500",
    ring: "ring-yellow-400",
    bg: "bg-yellow-500",
  },
};

export default function ColorSelectorCard() {
  const { color, setColor } = useTheme();

  return (
    <div className="space-y-4">
      <Card>
        <p className="text-lg font-semibold mb-4">Select a theme:</p>
        <div className="flex gap-3">
          {COLORS.map((clr) => {
            const { border, ring, bg } = colorMap[clr as keyof typeof colorMap];

            return (
              <button
                key={clr}
                onClick={() => setColor(clr)}
                className={clsx(
                  `w-8 h-8 rounded-full border-2 transition-all`,
                  color === clr
                    ? `${border} ring-2 ${ring}`
                    : "border-neutral-700",
                  bg
                )}
                aria-label={clr}
              />
            );
          })}
        </div>
      </Card>
    </div>
  );
}
