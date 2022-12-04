export const categories = [
    { _id: 1, userId: "111", name: "Рестораны" },
    {
        _id: 2,
        userId: "111",
        name: "Электроника"
    },
    {
        _id: 3,
        userId: "111",
        name: "Образование"
    },
    {
        _id: 4,
        userId: "111",
        name: "Квартплата"
    },
    {
        _id: 5,
        userId: "111",
        name: "Медицина"
    },
    {
        _id: 6,
        userId: "111",
        name: "Одежда"
    },
    {
        _id: 7,
        userId: "111",
        name: "Супермаркеты"
    },
    {
        _id: 8,
        userId: "111",
        name: "Другое"
    },
    {
        _id: 9,
        userId: "111",
        name: "Зарплата"
    },
    {
        _id: 10,
        userId: "112",
        name: "Путешествия"
    },
    {
        _id: 11,
        userId: "112",
        name: "Пенсия"
    },
    {
        _id: 12,
        userId: "112",
        name: "Аптеки"
    },
    {
        _id: 13,
        userId: "112",
        name: "Домашние животные"
    },
    {
        _id: 14,
        userId: "112",
        name: "Хобби"
    },
    {
        _id: 15,
        userId: "112",
        name: "Зарплата"
    }
];

export const categoriesObject = categories.reduce(
    (a, v) => ({ ...a, [v._id]: v }),
    {}
);

if (!localStorage.getItem("categories")) {
    localStorage.setItem("categories", JSON.stringify(categories));
}

const fetchAll = () =>
    new Promise((resolve) => {
        window.setTimeout(function () {
            resolve(categoriesObject);
        }, 2000);
    });

const fetchCategoriesForUser = (userId) =>
    new Promise((resolve) => {
        window.setTimeout(function () {
            resolve(
                JSON.parse(localStorage.getItem("categories")).filter(
                    (category) => category.userId === userId
                )
            );
        }, 200);
    });
const add = (data) =>
    new Promise((resolve) => {
        window.setTimeout(function () {
            const categories = JSON.parse(localStorage.getItem("categories"));
            const newCategory = {
                ...data,
                _id: Math.random().toString(36).substr(2, 9)
            };
            categories.push(newCategory);
            localStorage.setItem("categories", JSON.stringify(categories));
            resolve(newCategory);
        }, 200);
    });
const remove = (id) =>
    new Promise((resolve) => {
        window.setTimeout(function () {
            const categories = JSON.parse(localStorage.getItem("categories"));
            const newCategories = categories.filter(
                (category) => category._id !== id
            );
            console.log(id);
            console.log(newCategories);
            localStorage.setItem("categories", JSON.stringify(newCategories));
            resolve(id);
        }, 200);
    });

export default {
    fetchAll,
    fetchCategoriesForUser,
    add,
    remove
};
