// <--- HELPER-FUNCTIONS ---> //
export function getFullDate(timestamp: number): string {
  const months: string[] = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];
  const daysOfWeek: string[] = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  const date = new Date(timestamp * 1000);
  const dayOfWeek: string = daysOfWeek[date.getDay()];
  const day: number = date.getDate();
  const month: string = months[date.getMonth()];
  const year: number = date.getFullYear();
  return `${dayOfWeek} ${day} ${month}, ${year}`;
}
export function getWindDirect(windAngle: number): string {
  const directions: string[] = ['N', 'NE', 'E', 'SE', 'S', 'SW', 'W', 'NW'];
  return directions[Math.round(windAngle / 45)] || directions[0];
}
export function getDate(dateText: string) {
  const date = new Date(dateText).toString().split(' ');
  return `${date[1]} ${date[2]} ${date[4].slice(0, 5)}`;
}
export function getWeekDay(dateText: string) {
  return new Date(dateText).toString().split(' ')[0];
}
// <--- for selectSlice ---> //
export function upFirstChar(str: string) {
  return str[0].toUpperCase() + str.slice(1);
}
export const createOption = (label: string) => ({
  label: upFirstChar(label).trim(),
  value: label.toLowerCase().trim().replace(/\W/g, ''),
});
// </--- for selectSlice ---/> //
export const validateCityName = (label: string) => {
  return label
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, '')
    .replace(/[\s-]/g, '%20');
};