import React from "react";
import TaskMainPage from "../components/tasks/taskMainPage";
import TaskNewAccount from "../components/tasks/taskNewAccount";
import TaskNewCategory from "../components/tasks/taskNewCategory";
import TaskNewOperation from "../components/tasks/taskNewOperation";

const Main = () => {
    return (
        <>
            <TaskMainPage />
            <TaskNewOperation />
            <TaskNewCategory />
            <TaskNewAccount />
            <img src={`${process.env.PUBLIC_URL}/financme.png`} alt="logo" />
        </>
    );
};

export default Main;
