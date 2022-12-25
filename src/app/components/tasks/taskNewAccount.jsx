import React from "react";

const TaskNewAccount = () => {
    return (
        <div className="d-flex flex-column flex-shrink-0 p-3">
            {/* TASK */}
            <h1 className="">Новый счет и редактирование счета:</h1>
            <div className="form-check">
                <input
                    className="form-check-input"
                    type="checkbox"
                    value=""
                    id="flexCheckDefault"
                />
                <label className="form-check-label" htmlFor="flexCheckDefault">
                    Название счета
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
                    Тип счета (вклад, дебетовая карта и т.д.)
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

export default TaskNewAccount;
