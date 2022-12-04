import React from "react";
import PropTypes from "prop-types";

const AccountType = ({ color, name }) => {
    return <span className={"badge m-1 bg-" + color}>{name}</span>;
};
AccountType.propTypes = {
    color: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired
};

export default AccountType;
