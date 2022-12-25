import React from "react";

const TaskNewCategory = () => {
    return (
        <div className="d-flex flex-column flex-shrink-0 p-3">
            {/* TASK */}
            <h1 className="">Новая категория и редактирование категории:</h1>
            <div className="form-check">
                <input
                    className="form-check-input"
                    type="checkbox"
                    value=""
                    id="flexCheckDefault"
                />
                <label className="form-check-label" htmlFor="flexCheckDefault">
                    Название категории
                </label>
            </div>

            <div className="form-check">
                <input
                    className="form-check-input"
                    type="checkbox"
                    value=""
                    id="flexCheckDefault"
                />
                <label className="form-check-label" htmlFor="flexCheckDefault">
                    Тип категории (расход/доход)
                </label>
            </div>

            <div className="form-check">
                <input
                    className="form-check-input"
                    type="checkbox"
                    value=""
                    id="flexCheckDefault"
                />
                <label className="form-check-label" htmlFor="flexCheckDefault">
                    Иконка на выбор пользователя (по желанию)
                </label>
            </div>
        </div>
    );
};

export default TaskNewCategory;
