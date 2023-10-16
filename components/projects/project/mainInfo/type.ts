import { Project } from "@/app/[lng]/projects/type";
import { LngProps } from "@/app/type";

export type MainInfoProps = LngProps & Omit<Project, "description">;
