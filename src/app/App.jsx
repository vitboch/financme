import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import NavBar from "./components/ui/navbar";
import Transactions from "./layouts/transactions";
import Login from "./layouts/login";
import Main from "./layouts/main";

const App = () => {
    return (
        <div>
            <NavBar />
            <Switch>
                <Route
                    path="/transactions/:transactionId?"
                    component={Transactions}
                />
                <Route path="/login" component={Login} />
                <Route path="/" exact component={Main} />
                <Redirect to="/" />
            </Switch>
        </div>
    );
};

export default App;
