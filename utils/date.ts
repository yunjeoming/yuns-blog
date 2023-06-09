export const convertDateFormat = (date: string) => new Date(date).toLocaleDateString().slice(0, -1);
