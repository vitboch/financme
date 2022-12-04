import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import API from "../api";
import OperationsHistory from "./tasks/operationsHistory";
import TransactionStatus from "./transactionStatus";
import Pagination from "./pagination";
import { pagination } from "../utils/pagination";
import Transaction from "./transaction";
import GroupList from "./groupList";

const Transactions = () => {
    const userId = "111";
    const [transactions, setTransactions] = useState([]);
    const [categories, setCategories] = useState([]);
    const [selectedCategories, setSelectedCategories] = useState();
    const [wallets, setWallets] = useState([]);
    const [selectedWallets, setSelectedWallets] = useState();
    const [currentPage, setCurrentPage] = useState(1);
    const pageSize = 2;

    useEffect(() => {
        API.transactions
            .fetchTransactionsForUser(userId)
            .then((data) => setTransactions(data));
    }, []);
    useEffect(() => {
        API.categories
            .fetchCategoriesForUser(userId)
            .then((data) => setCategories(data));
    }, []);
    useEffect(() => {
        setCurrentPage(1);
    }, [selectedCategories]);
    useEffect(() => {
        API.wallets
            .fetchWalletsForUser(userId)
            .then((data) => setWallets(data));
    }, []);
    useEffect(() => {
        setCurrentPage(1);
    }, [selectedWallets]);

    const handleDelete = (transactionId) => {
        setTransactions(
            transactions.filter(
                (transaction) => transaction._id !== transactionId
            )
        );
    };
    const handlePageChange = (pageIndex) => {
        setCurrentPage(pageIndex);
    };
    const handleCategoriesSelect = (item) => {
        setSelectedCategories(item);
    };
    const handleWalletsSelect = (item) => {
        setSelectedWallets(item);
    };

    const filteredCategories =
        selectedCategories && selectedWallets
            ? transactions.filter(
                  (transaction) =>
                      JSON.stringify(transaction.category) ===
                          JSON.stringify(selectedCategories) &&
                      JSON.stringify(transaction.wallet) ===
                          JSON.stringify(selectedWallets)
              )
            : selectedCategories
            ? transactions.filter(
                  (transaction) =>
                      JSON.stringify(transaction.category) ===
                      JSON.stringify(selectedCategories)
              )
            : selectedWallets
            ? transactions.filter(
                  (transaction) =>
                      JSON.stringify(transaction.wallet) ===
                      JSON.stringify(selectedWallets)
              )
            : transactions;
    const count = filteredCategories.length;
    const transactionsCrop = pagination(
        filteredCategories,
        currentPage,
        pageSize
    );
    const clearFilter = () => {
        setSelectedCategories();
        setSelectedWallets();
    };

    return (
        <>
            <OperationsHistory />
            <div className="d-flex">
                {categories && (
                    <div className="d-flex flex-column flex-shrink-0 p-3">
                        <GroupList
                            items={categories}
                            onItemSelect={handleCategoriesSelect}
                            selectedItem={selectedCategories}
                        />
                    </div>
                )}
                {wallets && (
                    <div className="d-flex flex-column flex-shrink-0 p-3">
                        <GroupList
                            items={wallets}
                            onItemSelect={handleWalletsSelect}
                            selectedItem={selectedWallets}
                        />
                        <button
                            className="btn btn-secondary mt-2"
                            onClick={clearFilter}
                        >
                            {" "}
                            Очистить
                        </button>{" "}
                    </div>
                )}
            </div>
            <div className="d-flex flex-column">
                <TransactionStatus length={count} />
                {count > 0 && (
                    <table className="table">
                        <thead>
                            <tr>
                                <th scope="col">Дата</th>
                                <th scope="col">Название</th>
                                <th scope="col">Тип</th>
                                <th scope="col">Категория</th>
                                <th scope="col">Счет</th>
                                <th scope="col">Сумма</th>
                                <th scope="col" />
                            </tr>
                        </thead>
                        <tbody>
                            {transactionsCrop.map((transaction) => (
                                <Transaction
                                    key={transaction._id}
                                    {...transaction}
                                    onDelete={handleDelete}
                                />
                            ))}
                        </tbody>
                    </table>
                )}
                <div className="d-flex justify-content-center">
                    <Pagination
                        itemsCount={count}
                        pageSize={pageSize}
                        currentPage={currentPage}
                        onPageChange={handlePageChange}
                    />
                </div>
            </div>
        </>
    );
};
Transaction.propTypes = {
    transactions: PropTypes.array
};

export default Transactions;
