"use client";

import Card from "../components/Card";

export default function AboutMeCard() {
  return (
    <Card>
      <div className="space-y-4 text-[0.85rem] md:text-sm leading-relaxed tracking-wide text-neutral-300">
        <h2 className="text-xl font-semibold text-white">About Me</h2>
        <p>Hi, I&apos;m Mohan, a full-stack software developer from India.</p>
        <p className="font-medium text-white">My primary tools of choice include:</p>
        <ul className="list-disc list-inside space-y-1 pl-2">
          <li>JavaScript</li>
          <li>React</li>
          <li>Spring Boot</li>
          <li>Python</li>
          <li>Java</li>
          <li>C++</li>
        </ul>
        <p>
          As a full-stack developer, I’m constantly learning and refining my
          skills to build scalable and meaningful software solutions across the
          stack.
        </p>
      </div>
    </Card>
  );
}
