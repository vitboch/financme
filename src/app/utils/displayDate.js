export function displayDate(data) {
    const date = new Date(parseInt(data));
    return (
        date.getFullYear() + "." + (date.getMonth() + 1) + "_" + date.getDate()
    );
}
