import React from "react";
import Image from "./../images/bus-top.png";
import PropTypes from "prop-types";

const Bus = props => {
  const { bus } = props;
  return (
    <div
      className={`bus pos-${bus.positionX}-${bus.positionY} face-${bus.face}`}
    >
      <img src={Image} width="100" alt="" />
    </div>
  );
};

Bus.propTypes = {
  bus: PropTypes.object.isRequired
};

export default Bus;
