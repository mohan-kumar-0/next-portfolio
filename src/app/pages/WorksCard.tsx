import Card from "../components/Card";
import Image from "next/image";

export default function WorksCard() {
  return (
    <Card>
      <div className="flex items-center justify-between gap-4">
        <h2 className="text-lg md:text-xl font-semibold text-white font-mono">
          Works
        </h2>
        <Image
          src="https://media.tenor.com/dt1etVruHGAAAAAi/rylsee-tooshytorap.gif"
          alt="Works preview"
          width={100}
          height={70}
          className="object-cover rounded-md shadow-md"
        />
      </div>
    </Card>
  );
}
