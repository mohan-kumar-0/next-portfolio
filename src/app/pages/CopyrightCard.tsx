import Card from "../components/Card";

export default function CopyrightCard() {
  return (
    <Card>
      <p className="text-xs text-neutral-500 text-center">
        © {new Date().getFullYear()} Mohan Kumar. All rights reserved.
      </p>
    </Card>
  );
}
