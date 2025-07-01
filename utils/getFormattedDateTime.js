export function getFormattedDateTime() {
    const now = new Date();

    const pad = (n) => n.toString().padStart(2, '0');

    const day = pad(now.getDate());
    const month = pad(now.getMonth() + 1);
    const year = pad(now.getFullYear() % 100);

    let hours = now.getHours();
    const minutes = pad(now.getMinutes());

    const ampm = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12;
    hours = hours === 0 ? 12 : hours; // convert 0 to 12 for 12-hour clock
    hours = pad(hours);

    return `${day}-${month}-${year}_${hours}-${minutes}${ampm}`;
}