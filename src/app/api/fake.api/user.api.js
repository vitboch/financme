const users = [
    {
        _id: 111,
        name: "Аркадий",
        surname: "Паровозов",
        email: "par@mail.ru",
        password: "SuperHero#1"
    },
    {
        _id: 112,
        name: "Фрекен",
        surname: "Бок",
        email: "bok@yandex.ru",
        password: "Miss1932"
    }
];
if (!localStorage.getItem("users")) {
    localStorage.setItem("users", JSON.stringify(users));
}

const fetchAll = () =>
    new Promise((resolve) => {
        window.setTimeout(function () {
            resolve(JSON.parse(localStorage.getItem("users")));
        }, 2000);
    });
const update = (id, data) =>
    new Promise((resolve) => {
        const users = JSON.parse(localStorage.getItem("users"));
        const userIndex = users.findIndex((u) => u._id === id);
        users[userIndex] = { ...users[userIndex], ...data };
        localStorage.setItem("users", JSON.stringify(users));
        resolve(users[userIndex]);
    });

const getById = (id) =>
    new Promise((resolve) => {
        window.setTimeout(function () {
            resolve(
                JSON.parse(localStorage.getItem("users")).find(
                    (user) => user._id === id
                )
            );
        }, 1000);
    });
export default {
    fetchAll,
    getById,
    update
};
