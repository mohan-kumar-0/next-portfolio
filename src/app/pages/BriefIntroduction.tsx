"use client";

import Image from "next/image";
import Link from "next/link";
import socials from "../data/Socials";
import Card from "../components/Card";
import { useTheme } from "../context/ThemeContext";
import clsx from "clsx";

export default function BriefIntroduction() {
  const { color } = useTheme();

  return (
    <Card>
      <div className="grid grid-cols-1 md:grid-cols-3 w-full max-w-6xl overflow-hidden">
        <div className="col-span-2 p-6 space-y-6">
          <div>
            <h1 className="text-3xl font-bold mb-2 text-white">Welcome 👋</h1>
            <p className="text-neutral-300 text-sm leading-relaxed">
              I&apos;m Mohan, a passionate full-stack developer from India. I love crafting clean, efficient, and meaningful web experiences across the stack.
            </p>
          </div>

          <div className="grid grid-cols-4 gap-4">
            {socials.map(({ name, icon: Icon, url }) => (
              <Link
                key={name}
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className="group"
              >
                <div
                  className={clsx(
                    "flex items-center justify-center p-3 rounded-xl transition-all duration-300 border",
                    `border-${color}-500`
                  )}
                >
                  <Icon
                    className={clsx(
                      "text-xl text-neutral-300 transition-colors duration-300",
                      `group-hover:text-${color}-400`
                    )}
                  />
                </div>
              </Link>
            ))}
          </div>
        </div>

        <div className="flex items-center justify-center p-6">
          <Image
            src="/avatar.png"
            alt="Avatar"
            width={240}
            height={240}
            className="object-contain"
            priority
          />
        </div>
      </div>
    </Card>
  );
}
