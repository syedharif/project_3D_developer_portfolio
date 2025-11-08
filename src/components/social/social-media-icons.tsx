"use client";

import { useInView } from "framer-motion";
import React, { useRef } from "react";
import { Button } from "../ui/button";
import { SiGithub, SiLinkedin, SiTwitter } from "react-icons/si";
import { config } from "@/data/config";
import Link from "next/link";

const BUTTONS = [
  {
    name: "LinkedIn",
    href: config.social.linkedin,
    icon: SiLinkedin,
  },
  {
    name: "Github",
    href: config.social.github,
    icon: SiGithub,
  },
  {
    name: "Twitter",
    href: config.social.twitter,
    icon: SiTwitter,
  },
];

const SocialMediaButtons = () => {
  const ref = useRef<HTMLDivElement>(null);
  const show = useInView(ref, { once: true });

  return (
    <div ref={ref} className="z-10 flex gap-2">
      {show &&
        BUTTONS.map((button) => {
          const Icon = button.icon;
          return (
            <Link
              href={button.href}
              key={button.name}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={button.name}
            >
              <Button variant="ghost" className="p-2">
                {/* Icon inherits text color; we set theme-aware color via Tailwind */}
                <Icon size={24} className="text-slate-900 dark:text-white" />
              </Button>
            </Link>
          );
        })}
    </div>
  );
};

export default SocialMediaButtons;
