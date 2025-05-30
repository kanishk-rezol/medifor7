import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"
// import { ClassValue, clsx } from "clsx";
// import { twMerge } from "tailwind-merge";
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
