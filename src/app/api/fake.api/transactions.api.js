import { categoriesObject as categories } from "./categories.api";
import { walletsObject as wallets } from "./wallets.api";

const transactions = [
    {
        _id: "1234567889",
        userId: "111",
        created: "1633576399367",
        name: "Аванс",
        expenses: false,
        category: categories[9],
        wallet: wallets[3],
        amount: 45000,
        comment: ""
    },
    {
        _id: "1234567890",
        userId: "111",
        created: "1631546399561",
        name: "Волна",
        expenses: true,
        category: categories[1],
        wallet: wallets[1],
        amount: 5632,
        comment: "приятная атмосфера"
    },
    {
        _id: "1234567891",
        userId: "111",
        created: "1643542399761",
        name: "Ноутбук",
        expenses: true,
        category: categories[2],
        wallet: wallets[4],
        amount: 217633,
        comment: ""
    },
    {
        _id: "1234567892",
        userId: "111",
        created: "1373548399791",
        name: "Монитор",
        expenses: true,
        category: categories[2],
        wallet: wallets[4],
        amount: 11099,
        comment: "хорошая скидка"
    },
    {
        _id: "1234567893",
        userId: "111",
        created: "1643518399791",
        name: "Права пилота",
        expenses: true,
        category: categories[3],
        wallet: wallets[5],
        amount: 5000000,
        comment: ""
    },
    {
        _id: "1234567894",
        userId: "111",
        created: "1671548798881",
        name: "Спасатель",
        expenses: true,
        category: categories[3],
        wallet: wallets[5],
        amount: 70200,
        comment: ""
    },
    {
        _id: "1234567895",
        userId: "111",
        created: "1172522728882",
        name: "Автомобиль",
        expenses: true,
        category: categories[8],
        wallet: wallets[3],
        amount: 680123,
        comment: ""
    },
    {
        _id: "1234567896",
        userId: "111",
        created: "1288522998882",
        name: "Лента",
        expenses: true,
        category: categories[7],
        wallet: wallets[4],
        amount: 1500,
        comment: ""
    },
    {
        _id: "1234567897",
        userId: "111",
        created: "1388523338887",
        name: "Опотление",
        expenses: true,
        category: categories[4],
        wallet: wallets[3],
        amount: 1469,
        comment: ""
    },
    {
        _id: "1234567898",
        userId: "111",
        created: "1388424334487",
        name: "Спортмастер",
        expenses: true,
        category: categories[6],
        wallet: wallets[4],
        amount: 17555,
        comment: "спортивный костюм"
    },
    {
        _id: "1234567899",
        userId: "111",
        created: "1633424334434",
        name: "На отдых",
        expenses: false,
        category: categories[8],
        wallet: wallets[2],
        amount: 375550,
        comment: "спортивный костюм"
    },
    {
        _id: "1234567900",
        userId: "111",
        created: "1453524535434",
        name: "Мастерская улыбок",
        expenses: true,
        category: categories[5],
        wallet: wallets[1],
        amount: 22050,
        comment: ""
    },
    {
        _id: "1234567901",
        userId: "112",
        created: "1253524534444",
        name: "Ветеранские",
        expenses: false,
        category: categories[11],
        wallet: wallets[7],
        amount: 17141,
        comment: "Надбавка"
    },
    {
        _id: "1234567902",
        userId: "112",
        created: "1153533334221",
        name: "Монетка",
        expenses: true,
        category: categories[13],
        wallet: wallets[8],
        amount: 250,
        comment: "Корм для Матильды"
    },
    {
        _id: "1234567903",
        userId: "112",
        created: "123513314221",
        name: "Спартак",
        expenses: true,
        category: categories[14],
        wallet: wallets[8],
        amount: 31050,
        comment: "Пилатес"
    }
];
if (!localStorage.getItem("transactions")) {
    localStorage.setItem("transactions", JSON.stringify(transactions));
}
const fetchAll = () =>
    new Promise((resolve) => {
        window.setTimeout(function () {
            resolve(transactions);
        }, 200);
    });

const fetchTransactionsForUser = (userId) =>
    new Promise((resolve) => {
        window.setTimeout(function () {
            resolve(
                JSON.parse(localStorage.getItem("transactions")).filter(
                    (transaction) => transaction.userId === userId
                )
            );
        }, 200);
    });
const add = (data) =>
    new Promise((resolve) => {
        window.setTimeout(function () {
            const transactions = JSON.parse(
                localStorage.getItem("transactions")
            );
            const newTransaction = {
                ...data,
                created: Date.now(),
                _id: Math.random().toString(36).substr(2, 9)
            };
            transactions.push(newTransaction);
            localStorage.setItem("transactions", JSON.stringify(transactions));
            resolve(newTransaction);
        }, 200);
    });

const remove = (id) =>
    new Promise((resolve) => {
        window.setTimeout(function () {
            const transactions = JSON.parse(
                localStorage.getItem("transactions")
            );
            const newTransactions = transactions.filter(
                (transaction) => transaction._id !== id
            );
            console.log(id);
            console.log(newTransactions);
            localStorage.setItem(
                "transactions",
                JSON.stringify(newTransactions)
            );
            resolve(id);
        }, 200);
    });
export default {
    fetchAll,
    fetchTransactionsForUser,
    add,
    remove
};
