import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * Menggabungkan class Tailwind dengan cerdas.
 * Mencegah konflik class (misal: 'px-2 px-4' menjadi 'px-4')
 * dan memungkinkan pengkondisian class yang bersih.
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}