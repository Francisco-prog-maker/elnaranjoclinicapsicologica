import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function createGoogleCalendarUrl(defaultTitle = "Cita en Clínica El Naranjo") {
  // Format date for tomorrow at 10:00 AM
  const tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);
  tomorrow.setHours(10, 0, 0, 0);

  // Set duration to 1 hour
  const endTime = new Date(tomorrow);
  endTime.setHours(11, 0, 0, 0);

  // Format dates for Google Calendar URL
  const startDate = tomorrow.toISOString().replace(/-|:|\.\d+/g, "");
  const endDate = endTime.toISOString().replace(/-|:|\.\d+/g, "");

  return `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(defaultTitle)}&dates=${startDate}/${endDate}`;
}
