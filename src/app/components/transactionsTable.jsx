import React from "react";
import PropTypes from "prop-types";
import TableHeader from "./common/table/tableHeader";
import TableBody from "./common/table/tableBody";
import Table from "./common/table/table";
import { displayDate } from "../utils/displayDate";
import TypeTransaction from "./typeTransaction";
import AccountType from "./accountType";

const TransactionsTable = ({
    transactions,
    onSort,
    selectedSort,
    onDelete
}) => {
    const columns = {
        created: {
            path: "created",
            name: "Дата",
            component: (transaction) => <>{displayDate(transaction.created)}</>
        },
        name: { path: "name", name: "Название" },
        expenses: {
            path: "expenses",
            name: "Тип",
            component: (transaction) => (
                <TypeTransaction status={transaction.expenses} />
            )
        },
        category: { path: "category.name", name: "Категория" },
        wallet: {
            path: "wallet.name",
            name: "Счет",
            component: (transaction) => (
                <AccountType
                    color={transaction.wallet.color}
                    name={transaction.wallet.name}
                />
            )
        },
        amount: { path: "amount", name: "Сумма" },
        delete: {
            component: (transaction) => (
                <button
                    onClick={() => onDelete(transaction._id)}
                    className="btn btn-danger"
                >
                    X
                </button>
            )
        }
    };

    return (
        <Table>
            <TableHeader {...{ onSort, selectedSort, columns }} />
            <TableBody {...{ columns, data: transactions }} />
        </Table>
    );
};
TransactionsTable.propTypes = {
    transactions: PropTypes.array.isRequired,
    onSort: PropTypes.func.isRequired,
    selectedSort: PropTypes.object.isRequired,
    onDelete: PropTypes.func.isRequired
};

export default TransactionsTable;
