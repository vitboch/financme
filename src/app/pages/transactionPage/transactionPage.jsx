import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { useHistory } from "react-router-dom";
import API from "../../api";
import { displayDate } from "../../utils/displayDate";
import Loader from "../../components/common/loader";
import TypeTransaction from "../../components/common/typeTransaction";
import AccountType from "../../components/common/accountType";
import TaskNewOperation from "../../components/tasks/taskNewOperation";

const TransactionPage = ({ transactionId }) => {
    const history = useHistory();
    const [transaction, setTransaction] = useState();
    useEffect(() => {
        API.transactions
            .getById(transactionId)
            .then((data) => setTransaction(data));
    }, []);
    const handleClick = () => {
        history.push("/transactions");
    };

    return (
        <>
            <TaskNewOperation />
            {transaction ? (
                <div>
                    дата:<h1>{displayDate(transaction.created)}</h1>
                    счет:
                    <h1>
                        {
                            <AccountType
                                color={transaction.wallet.color}
                                name={transaction.wallet.name}
                            />
                        }
                    </h1>
                    категория:
                    <h1> {transaction.category.name}</h1>
                    тип:
                    <h1>{<TypeTransaction status={transaction.expenses} />}</h1>
                    сумма:
                    <h1>{transaction.amount}</h1>
                    комментарий:
                    <h1> {transaction.name}</h1>
                    <div></div>
                    <div></div>
                    <button onClick={handleClick}> Все операции</button>
                </div>
            ) : (
                <Loader />
            )}
        </>
    );
};

TransactionPage.propTypes = {
    transactionId: PropTypes.string.isRequired
};

export default TransactionPage;
