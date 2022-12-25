import React from "react";

const TaskSettings = () => {
    return (
        <div className="d-flex flex-column flex-shrink-0 p-3">
            {/* TASK */}
            <h1 className="">Настройки:</h1>
            <div className="form-check">
                <input
                    className="form-check-input"
                    type="checkbox"
                    value=""
                    id="flexCheckDefault"
                />
                <label className="form-check-label" htmlFor="flexCheckDefault">
                    Возможность сменить данные о пользователе
                </label>
            </div>
        </div>
    );
};

export default TaskSettings;
