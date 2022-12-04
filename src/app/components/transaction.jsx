import React from "react";
import PropTypes from "prop-types";
import AccountType from "./accountType";
import TypeTransaction from "./typeTransaction";
import { displayDate } from "../utils/displayDate";

const Transaction = ({
    _id,
    created,
    name,
    expenses,
    category,
    wallet,
    amount,
    onDelete
}) => {
    return (
        <tr>
            <td>{displayDate(created)}</td>
            <td>{name}</td>
            <td>
                <TypeTransaction status={expenses} />
            </td>
            <td>{category.name}</td>
            <td>
                <AccountType color={wallet.color} name={wallet.name} />
            </td>
            <td>{amount}</td>
            <td>
                <button
                    className={"btn btn-danger"}
                    onClick={() => onDelete(_id)}
                >
                    x
                </button>
            </td>
        </tr>
    );
};
Transaction.propTypes = {
    _id: PropTypes.string.isRequired,
    created: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    expenses: PropTypes.bool.isRequired,
    category: PropTypes.object.isRequired,
    wallet: PropTypes.object.isRequired,
    amount: PropTypes.number.isRequired,
    onDelete: PropTypes.func.isRequired
};

export default Transaction;
