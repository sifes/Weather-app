export function getDate(timestamp: number): string {
	const months: string[] = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

	const daysOfWeek: string[] = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

	const date = new Date(timestamp * 1000);
	const dayOfWeek: string = daysOfWeek[date.getDay()];
	const day: number = date.getDate();
	const month: string = months[date.getMonth()];
	const year: number = date.getFullYear();

	return `${dayOfWeek} ${day} ${month}, ${year}`;
}
