'use client';

import { useEffect, useState } from "react";
import Card from "../components/Card";

export default function TimeCard() {
  const [time, setTime] = useState<string>("");

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const options: Intl.DateTimeFormatOptions = {
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: false,
        timeZone: "Asia/Kolkata",
      };
      setTime(new Intl.DateTimeFormat("en-IN", options).format(now));
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <Card>
      <div className="text-center space-y-2">
        <p className="text-2xl font-mono">{time} IST</p>
      </div>
    </Card>
  );
}
