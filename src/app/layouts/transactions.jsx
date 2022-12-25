import React from "react";
import { useParams } from "react-router-dom";
import TransactionPage from "../pages/transactionPage/transactionPage";

import TransactionsListPage from "../pages/transactionsListPage/transactionsListPage";

const Transactions = () => {
    const params = useParams();
    const { transactionId } = params;

    return (
        <>
            {transactionId ? (
                <TransactionPage transactionId={transactionId} />
            ) : (
                <TransactionsListPage />
            )}
        </>
    );
};

export default Transactions;
