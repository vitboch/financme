import React from "react";

const OperationsHistory = () => {
    return (
        <div className="d-flex flex-column flex-shrink-0 p-3">
            {/* TASK */}
            <h1 className="">История операций:</h1>
            <div className="form-check">
                <input
                    className="form-check-input"
                    type="checkbox"
                    value=""
                    id="flexCheckDefault"
                    defaultChecked
                />
                <label className="form-check-label" htmlFor="flexCheckDefault">
                    Просмотр всех операций
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
                    Возможность открыть страницу добавления операции
                </label>
            </div>

            <div className="form-check">
                <input
                    className="form-check-input"
                    type="checkbox"
                    value=""
                    id="flexCheckDefault"
                    defaultChecked
                />
                <label className="form-check-label" htmlFor="flexCheckDefault">
                    Возможность открыть страницу изменения операции
                </label>
            </div>

            <div className="form-check">
                <input
                    className="form-check-input"
                    type="checkbox"
                    value=""
                    id="flexCheckDefault"
                    defaultChecked
                />
                <label className="form-check-label" htmlFor="flexCheckDefault">
                    Возможность удалить операцию
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
                    Фильтрация по датам и т.д.
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
                    Фильтрация по счетам
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
                    Фильтрация по категориям
                </label>
            </div>

            <div className="form-check">
                <input
                    className="form-check-input"
                    type="checkbox"
                    value=""
                    id="flexCheckDefault"
                    defaultChecked
                />
                <label className="form-check-label" htmlFor="flexCheckDefault">
                    Пагинация (чтобы не выводилось сразу очень большое
                    количество операций на странице)
                </label>
            </div>
        </div>
    );
};

export default OperationsHistory;
