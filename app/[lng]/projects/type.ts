import { IconType } from "react-icons/lib";

export type Projects = Project[];
export type Project = {
  id: string;
  title: string;
  description: Description;
  owner: string;
  ownerLogo?: IconType;
  projectEstimateTime: string;
  images: string[];
  link?: string;
  sourceCodeUrl?: string;
  tools: IconType[];
  collaborators: string[];
};
export type Video = { src: string; thumb: string };
export type Description = { main: string; list: string[] };
