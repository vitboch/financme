import React from "react";
import Transactions from "./components/transactions";

const App = () => {
    return (
        <div className="d-flex flex-column">
            <div className="container mt-5">
                <Transactions />
                {/* <img src={`${process.env.PUBLIC_URL}/financme.png`} alt="logo" /> */}
            </div>
        </div>
    );
};

export default App;
