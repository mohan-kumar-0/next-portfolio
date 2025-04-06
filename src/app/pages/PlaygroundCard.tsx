import { MdOutlineArrowOutward } from "react-icons/md";
import Card from "../components/Card";
import Link from "next/link";

export default function PlaygroundCard() {
  return (
    <Card>
      <div className="flex items-center justify-between mb-2">
        <h2 className="text-lg font-semibold text-white">Playground</h2>
        <Link href="/playground" target="_blank" rel="noopener noreferrer">
          <MdOutlineArrowOutward className="text-gray-400 hover:text-purple-400 transition-colors duration-200 text-xl" />
        </Link>
      </div>
    </Card>
  );
}
