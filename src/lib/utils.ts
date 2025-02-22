import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function calculateReadingTime(content: string) {
  const wordsPerMinute = 200
  const numberOfWords = content.split(/\s/g).length
  const minutes = numberOfWords / wordsPerMinute
  return Math.ceil(minutes)
}