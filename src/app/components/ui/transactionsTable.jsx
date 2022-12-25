import React from "react";
import PropTypes from "prop-types";
import TableHeader from "../common/table/tableHeader";
import TableBody from "../common/table/tableBody";
import Table from "../common/table/table";
import { displayDate } from "../../utils/displayDate";
import TypeTransaction from "../common/typeTransaction";
import AccountType from "../common/accountType";
import { Link } from "react-router-dom";

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
        name: { path: "name", name: "Комментарий" },
        edit: {
            component: (transaction) => (
                <Link to={`/transactions/${transaction._id}`}>
                    <button className="btn btn-warning">
                        <i className="bi bi-pencil"></i>
                    </button>
                </Link>
            )
        },
        delete: {
            component: (transaction) => (
                <button
                    onClick={() => onDelete(transaction._id)}
                    className="btn btn-danger"
                >
                    <i className="bi bi-x-circle"></i>
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
