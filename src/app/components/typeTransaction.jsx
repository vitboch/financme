import React from "react";
import PropTypes from "prop-types";

const TypeTransaction = ({ status }) => {
    return <i className={"bi bi-caret-" + (status ? "left" : "right")}></i>;
};
TypeTransaction.propTypes = {
    status: PropTypes.bool
};

export default TypeTransaction;
