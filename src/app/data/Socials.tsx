import { FaGithub, FaLinkedin, FaCalendarAlt } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import { IconType } from "react-icons";

export type SocialItem = {
  name: string;
  icon: IconType;
  url: string;
};

const socials: SocialItem[] = [
  {
    name: "LinkedIn",
    icon: FaLinkedin,
    url: "https://www.linkedin.com/in/mohan-kmr/",
  },
  {
    name: "GitHub",
    icon: FaGithub,
    url: "https://github.com/mohan-kumar-0",
  },
  {
    name: "LeetCode",
    icon: SiLeetcode,
    url: "https://leetcode.com/u/mohan-kmr/",
  },
  {
    name: "Schedule a meeting",
    icon: FaCalendarAlt,
    url: "https://cal.com/mohan.kmr",
  },
];

export default socials;
