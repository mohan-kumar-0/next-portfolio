import { MdOutlineArrowOutward } from "react-icons/md";
import Card from "../components/Card";
import Link from "next/link";

export default function BlogCard() {
  return (
    <Card>
      <div className="flex items-center justify-between mb-2">
        <h2 className="text-lg md:text-xl font-semibold text-white font-mono">
          Blog
        </h2>
        <Link
          href="/blogs"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-400 hover:text-current transition-colors duration-200"
        >
          <MdOutlineArrowOutward className="text-xl" />
        </Link>
      </div>
      <p className="text-sm text-neutral-400 font-mono">
        Explore my experiments, thoughts, and tech breakdowns.
      </p>
    </Card>
  );
}
