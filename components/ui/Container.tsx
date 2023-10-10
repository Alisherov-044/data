"use client";
import { ContainerI } from "@/interface";

export function Container({ children }: ContainerI) {
  return <div className="container">{children}</div>;
}
