"use client";

import Link from "next/link";
import { MdArrowForward } from "react-icons/md";
import { useTheme } from "./context/ThemeContext";
import clsx from "clsx";

export default function NotFound() {
  const { color } = useTheme();

  return (
    <div className="relative min-h-screen bg-background text-white font-sans antialiased flex flex-col items-center justify-center px-6">
      <div className="pointer-events-none fixed inset-0 z-0 animate-grid bg-fancy-grid" />

      <div className="relative z-10 max-w-md w-full text-center space-y-6">
        <h1 className="text-6xl font-bold tracking-tight">404</h1>
        <p className="text-neutral-400 text-base md:text-lg">
          Looks like you&apos;ve wandered off the grid.
        </p>

        <Link
          href="/"
          className={clsx(
            "inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg border text-sm font-medium transition-colors duration-300",
            `border-${color}-500 text-${color}-400 hover:border-${color}-400 hover:text-${color}-300`
          )}
        >
          Go back home
          <MdArrowForward className="text-lg" />
        </Link>
      </div>
    </div>
  );
}
