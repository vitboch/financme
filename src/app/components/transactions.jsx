import React, { useState, useEffect } from "react";
import API from "../api";
import _ from "lodash";
import OperationsHistory from "./tasks/operationsHistory";
import TransactionStatus from "./transactionStatus";
import Pagination from "./pagination";
import { pagination } from "../utils/pagination";
import GroupList from "./groupList";
import TransactionsTable from "./transactionsTable";
import Loader from "./common/loader";

const Transactions = () => {
    const userId = "111";
    const [transactions, setTransactions] = useState();
    const [categories, setCategories] = useState();
    const [selectedCategories, setSelectedCategories] = useState();
    const [wallets, setWallets] = useState();
    const [selectedWallets, setSelectedWallets] = useState();
    const [currentPage, setCurrentPage] = useState(1);
    const [sortBy, setSortBy] = useState({ path: "created", order: "desc" });
    const pageSize = 8;

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
    const handleSort = (item) => {
        setSortBy(item);
    };

    if (transactions) {
        const filteredTransactions =
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
        const count = filteredTransactions.length;
        const sortedTransactions = _.orderBy(
            filteredTransactions,
            [sortBy.path],
            [sortBy.order]
        );
        const transactionsCrop = pagination(
            sortedTransactions,
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
                        <TransactionsTable
                            transactions={transactionsCrop}
                            onSort={handleSort}
                            selectedSort={sortBy}
                            onDelete={handleDelete}
                        />
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
    }
    return <Loader />;
};

export default Transactions;
