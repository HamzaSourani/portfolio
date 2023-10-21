import {
  BiLogoTypescript,
  BiLogoJavascript,
  BiLogoCss3,
  BiLogoHtml5,
  BiLogoRedux,
  BiLogoReact,
  BiLogoTailwindCss,
  BiLogoGitlab,
  BiLogoGithub,
  BiLogoGit,
} from "react-icons/bi";
import {
  SiI18Next,
  SiNextdotjs,
  SiReactquery,
  SiMui,
  SiPostman,
  SiSwagger,
  SiAxios,
  SiReactrouter,
  SiReacthookform,
  SiFigma,
} from "react-icons/si";

import FormikIcon from "@/components/ui/svgs/formik";
import Yup from "@/components/ui/svgs/yup";
export const SKILLS = [
  { label: "react.js", icon: BiLogoReact },
  { label: "next.js", icon: SiNextdotjs },
  { label: "javascript", icon: BiLogoJavascript },
  { label: "typescript", icon: BiLogoTypescript },
  { label: "react router", icon: SiReactrouter },
  { label: "react query", icon: SiReactquery },
  { label: "redux", icon: BiLogoRedux },
  { label: "axios", icon: SiAxios },
  { label: "HTML", icon: BiLogoHtml5 },
  { label: "CSS", icon: BiLogoCss3 },
  { label: "tailwind", icon: BiLogoTailwindCss },
  { label: "MUI", icon: SiMui },
  { label: "i18next", icon: SiI18Next },
  { label: "formik", icon: FormikIcon },
  { label: "react hook form", icon: SiReacthookform },
  { label: "yup", icon: Yup },
];
export const TOOLS = [
  { label: "git", icon: BiLogoGit },
  { label: "github", icon: BiLogoGithub },
  { label: "gitlab", icon: BiLogoGitlab },
  { label: "postman", icon: SiPostman },
  { label: "swagger", icon: SiSwagger },
  { label: "figma", icon: SiFigma },
];
