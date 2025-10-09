import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function formatMarkdownText(text: string, color?: string): string {
  // Convert **bold** to HTML bold tags with optional color class
  const colorClass = color ? ` class="${color}"` : ''
  return text.replace(/\*\*(.*?)\*\*/g, `<strong${colorClass}>$1</strong>`)
}
