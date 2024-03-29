const dateFormatter = {
    formatDateISO(date:any) {
        const year = date.getFullYear();
        const month = String(date.getMonth() + 1).padStart(2, '0');
        const day = String(date.getDate()).padStart(2, '0');
        return `${year}-${month}-${day}`;
    },
    getMonthName(month: number, option: 'numeric' | '2-digit' | 'narrow' | 'short' | 'long' = 'long') {
        const date = new Date();
        date.setMonth(month - 1); // months are 0-indexed in Date object
        return date.toLocaleString('en-US', { month: option });
    },
    formatDate(timestamp: number) {
        const date = new Date(timestamp);
        const year = date.getFullYear().toString().padStart(4, '0');
        const month = (date.getMonth() + 1).toString().padStart(2, '0');
        const day = date.getDate().toString().padStart(2, '0');
        const hours = date.getHours().toString().padStart(2, '0');
        const minutes = date.getMinutes().toString().padStart(2, '0');
        const seconds = date.getSeconds().toString().padStart(2, '0');
        return `${year}-${month}-${day} - ${hours}:${minutes}:${seconds}`;
    },
    todayDate() {
        const date = new Date();
        const suffixes = ["th", "st", "nd", "rd"];
        const dayOfMonth = date.getDate();
        const suffix = suffixes[(dayOfMonth - 1) % 10 === 1 && dayOfMonth !== 11 ? 1 : (dayOfMonth - 1) % 10 === 2 && dayOfMonth !== 12 ? 2 : (dayOfMonth - 1) % 10 === 3 && dayOfMonth !== 13 ? 3 : 0];
        const monthName = date.toLocaleString("default", { month: "long" });
        const year = date.getFullYear();
        return `${dayOfMonth}${suffix} ${monthName} ${year}`;
    }
}

export default dateFormatter;
