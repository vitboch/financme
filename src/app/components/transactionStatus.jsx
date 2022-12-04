import React from "react";
import PropTypes from "prop-types";

const TransactionStatus = ({ length }) => {
    const renderWord = (number) => {
        const lastOne = Number(number.toString().slice(-1));
        if (number > 10 && number < 15) {
            return "транcакций";
        }
        if (lastOne === 1) return "транcакция";
        if ([2, 3, 4].indexOf(lastOne) >= 0) return "транcакции";
        return "транcакций";
    };
    return (
        <h1>
            <span className={"badge bg-primary"}>{`${
                length + " " + renderWord(length)
            }`}</span>
        </h1>
    );
};
TransactionStatus.propTypes = {
    length: PropTypes.number
};

export default TransactionStatus;
