import Card from "../components/Card";
import socials from "../data/Socials";
import Link from "next/link";
import { useTheme } from "../context/ThemeContext";

export default function WorkTogetherCard() {
  const { color } = useTheme();

  return (
    <Card>
      <div className="space-y-5 text-xs sm:text-sm md:text-[13px] text-neutral-300 leading-relaxed font-mono">
        <h2 className="text-lg md:text-xl font-semibold text-white">
          Let’s start working together!
        </h2>

        <div className="space-y-1">
          <h3 className="text-sm font-medium text-white/80">Contact</h3>
          <p className="text-neutral-400">mk6216217@gmail.com</p>
        </div>

        <div className="space-y-2">
          <h3 className="text-sm font-medium text-white/80">Socials</h3>
          <div className="flex flex-wrap gap-3">
            {socials.map(({ name, url }) => (
              <Link
                key={name}
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className={`px-3 py-1.5 rounded-md border border-neutral-700 hover:border-${color}-500 hover:text-${color}-500 transition-all text-neutral-400 text-xs`}
              >
                {name}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </Card>
  );
}
