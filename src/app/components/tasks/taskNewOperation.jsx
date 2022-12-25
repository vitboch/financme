import React from "react";

const TaskNewOperation = () => {
    return (
        <div className="d-flex flex-column flex-shrink-0 p-3">
            {/* TASK */}
            <h1 className="">Новая операция и редактирование операции:</h1>
            <div className="form-check">
                <input
                    className="form-check-input"
                    type="checkbox"
                    value=""
                    id="flexCheckDefault"
                />
                <label className="form-check-label" htmlFor="flexCheckDefault">
                    Выбор счета, с которого будет производиться оплата/
                    пополнение
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
                    Выбор категории траты/дохода
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
                    Ввод суммы расхода/дохода
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
                    Ввод комментария для операции
                </label>
            </div>
        </div>
    );
};

export default TaskNewOperation;
