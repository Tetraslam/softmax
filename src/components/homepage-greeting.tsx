"use client";

import { useEffect, useState } from "react";

const nicknames = [
  "builder",
  "dreamer",
  "maker",
  "wanderer",
  "creator",
  "thinker",
  "explorer",
  "architect",
  "pioneer",
  "visionary",
  "craftsperson",
  "hacker",
  "artist",
  "friend",
]

const adjectives = [
  "brilliant",
  "curious",
  "thoughtful",
  "wonderful",
  "creative",
  "lovely",
  "talented",
  "kind",
  "amazing",
  "incredible",
  "resourceful",
  "clever",
  "imaginative",
  "delightful",
];

export function HomepageGreeting() {
  const [greeting, setGreeting] = useState("");
  const [nickname, setNickname] = useState("");
  const [adjective, setAdjective] = useState("");

  useEffect(() => {
    const hour = new Date().getHours();
    let timeGreeting = "";
    
    if (hour < 12) {
      timeGreeting = "good morning";
    } else if (hour < 18) {
      timeGreeting = "good afternoon";
    } else {
      timeGreeting = "good evening";
    }
    
    setGreeting(timeGreeting);
    
    // Pick random nickname and adjective consistently for this session
    const randomNickname = nicknames[Math.floor(Math.random() * nicknames.length)];
    const randomAdjective = adjectives[Math.floor(Math.random() * adjectives.length)];
    setNickname(randomNickname);
    setAdjective(randomAdjective);
  }, []);

  if (!greeting) return null;

  return (
    <p className="text-sm sm:text-base text-muted-foreground/70 font-light italic">
      {greeting}, you {adjective} {nickname}, you!
    </p>
  );
}

