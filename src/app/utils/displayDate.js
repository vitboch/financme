export function displayDate(data) {
    const date = new Date(parseInt(data));
    const day = date.getDate();
    const month = date.getMonth() + 1;
    const year = date.getFullYear();
    const formatData = (data) => (`${data}`.length < 2 ? `0${data}` : data);

    return `${formatData(day)}.${formatData(month)}.${year}`;
}
