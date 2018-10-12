import React from "react";
import PropTypes from "prop-types";

const Notification = props => {
  const { massage } = props;
  return <div className="alert alert-danger text-center">{massage}</div>;
};

Notification.propTypes = {
  massge: PropTypes.string
};

export default Notification;
