import { ComponentProps, ReactNode } from "react";

export interface ContainerI {
  children: ReactNode;
}

export interface ButtonI extends ComponentProps<"button"> {
  children: ReactNode;
  variant?: "primary" | "secondary";
}

export interface SelectI {
  options: any[];
  defaultValue?: any;
  labelKey?: string;
  valueKey?: string;
}

export interface DrawerNavI {
  isOpen: boolean;
  close: () => void;
}

export interface MapButtonI extends ComponentProps<"button"> {
  variant?: "primary" | "secondary";
}
