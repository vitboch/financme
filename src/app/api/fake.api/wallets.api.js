export const wallets = [
    { _id: "1", userId: "111", name: "Наличные", color: "dark" },
    { _id: "2", userId: "111", name: "Вклад", color: "info" },
    { _id: "3", userId: "111", name: "Сбербанк", color: "success" },
    { _id: "4", userId: "111", name: "Альфабанк", color: "danger" },
    { _id: "5", userId: "111", name: "Тинькофф", color: "warning" },
    { _id: "6", userId: "112", name: "Наличные", color: "primary" },
    { _id: "7", userId: "112", name: "Почтабанк", color: "info" },
    { _id: "8", userId: "112", name: "ВТБ", color: "primary" }
];

export const walletsObject = wallets.reduce(
    (a, v) => ({ ...a, [v._id]: v }),
    {}
);

if (!localStorage.getItem("wallets")) {
    localStorage.setItem("wallets", JSON.stringify(wallets));
}

const fetchAll = () =>
    new Promise((resolve) => {
        window.setTimeout(function () {
            resolve(walletsObject);
        }, 2000);
    });

const fetchWalletsForUser = (userId) =>
    new Promise((resolve) => {
        window.setTimeout(function () {
            resolve(
                JSON.parse(localStorage.getItem("wallets")).filter(
                    (wallet) => wallet.userId === userId
                )
            );
        }, 200);
    });
const add = (data) =>
    new Promise((resolve) => {
        window.setTimeout(function () {
            const wallets = JSON.parse(localStorage.getItem("wallets"));
            const newWallets = {
                ...data,
                _id: Math.random().toString(36).substr(2, 9)
            };
            wallets.push(newWallets);
            localStorage.setItem("wallets", JSON.stringify(wallets));
            resolve(newWallets);
        }, 200);
    });
const remove = (id) =>
    new Promise((resolve) => {
        window.setTimeout(function () {
            const wallets = JSON.parse(localStorage.getItem("wallets"));
            const newWallets = wallets.filter((wallet) => wallet._id !== id);
            console.log(id);
            console.log(newWallets);
            localStorage.setItem("wallets", JSON.stringify(newWallets));
            resolve(id);
        }, 200);
    });

export default {
    fetchAll,
    fetchWalletsForUser,
    add,
    remove
};
