import React from "react";
import PropTypes from "prop-types";

const Report = ({ status, reportTimes }) => (
  <div className="alert alert-success text-center" role="alert">
    The bus is currently parked at <strong>X: {status.positionX}</strong> and{" "}
    <strong>
      Y: {reportTimes === 2 ? status.positionY + 1 : status.positionY}
    </strong>
    , facing <strong>{status.face}</strong>
  </div>
);

Report.propTypes = {
  status: PropTypes.object.isRequired
};

export default Report;
