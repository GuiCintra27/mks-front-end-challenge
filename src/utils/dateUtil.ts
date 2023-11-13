export function timeUntilTheNextDay(): number {
  // Get the current date and time
  const now: Date = new Date();

  // Get the current date components
  const currentYear: number = now.getFullYear();
  const currentMonth: number = now.getMonth(); // 0-based index (0 = January)
  const currentDate: number = now.getDate();

  // Create a new Date object for tomorrow
  const tomorrow: Date = new Date(
    currentYear,
    currentMonth,
    currentDate + 1,
    0,
    0,
    0
  );

  // Calculate the time difference in milliseconds
  return tomorrow.getTime() - now.getTime();
}
