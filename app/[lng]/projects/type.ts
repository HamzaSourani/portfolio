import { IconType } from "react-icons/lib";

export type Projects = Project[];
export type Project = {
  id: string;
  title: string;
  description: Description;
  owner: string;
  ownerLogo?: IconType;
  estimateTime: string;
  images: string[];
  link?: string;
  sourceCodeUrl?: string;
  tools: Tool[];
  collaborators: string[];
};
export type Tool = { label: string; icon: IconType };
export type Video = { src: string; thumb: string };
export type Description = { main: string; list: string[] };
