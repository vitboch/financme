export function displayDate(data) {
    const date = new Date(parseInt(data));
    return (
        date.getMonth() + 1 + "." + date.getDate() + "." + date.getFullYear()
    );
}
