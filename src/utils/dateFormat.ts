export const dateFormat = (dateString: string | Date) => {
    return new Date(dateString).toLocaleString("sk-SK", {
        timeZone: "Europe/Bratislava",
        year: "numeric",
        month: "numeric",
        day: "numeric",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
    });
};
