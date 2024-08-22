// Import the necessary modules
import clsx from "clsx";
import { twMerge } from "tailwind-merge";

// Define the `cn` function
export function cn(...inputs) {
  return twMerge(clsx(inputs));
}
