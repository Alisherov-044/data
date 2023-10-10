import { FC } from "react";

export interface NavLinkI {
  id: number;
  text: string;
  link: string;
}

export interface LanguageI {
  id: number;
  label: string;
  value: string;
}

export interface CourseI {
  id: number;
  name: string;
  slug: string;
}

export interface SocialNetworkI {
  id: number;
  link: string;
  Icon: FC;
}
