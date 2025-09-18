import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function formatMarkdownText(text: string): string {
  // Convert **bold** to HTML bold tags for rendering
  return text.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
}
