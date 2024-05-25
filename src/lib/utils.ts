import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function timeBefore(time: Date) {
  const current = new Date();
  const diff = current.getTime() - time.getTime();
  const days = Math.floor(diff / (1000 * 3600 * 24));
  const years = Math.floor(days / 365);
  const months = Math.floor(days / 30);
  const hours = Math.floor(diff / (1000 * 60 * 60));
  const minutes = Math.floor((diff / (1000 * 60)) % 60);
  const seconds = Math.floor((diff / 1000) % 60);
  if (years >= 1) {
    return `${years} 年前`
  } else if (months > 0) {
    return `${months} 个月前`
  } else if (days >= 1) {
    return `${days} 天前`
  } else if (hours >= 1) {
    return `${hours} 小时前`
  } else if (minutes >= 1) {
    return `${minutes} 分钟前`
  } else {
    return `${seconds} 秒前`
  }
}