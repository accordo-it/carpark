import React from "react";
import PropTypes from "prop-types";

const Control = props => {
  const { placed, onMove, onRotate, onReport } = props;
  return (
    <div className="bus-control">
      <div className="container-fluid">
        <h3>Step 2: Move and rotate the bus</h3>
        <div className="btn-group" role="group" aria-label="controls">
          <button
            type="button"
            className="btn btn-secondary"
            id="move"
            disabled={!placed}
            onClick={() => onMove()}
          >
            Move
          </button>
          <button
            type="button"
            className="btn btn-secondary"
            id="rotate-left"
            name="left"
            disabled={!placed}
            onClick={onRotate}
          >
            Left
          </button>
          <button
            type="button"
            className="btn btn-secondary"
            id="rotate-right"
            name="right"
            disabled={!placed}
            onClick={onRotate}
          >
            Right
          </button>
          <button
            type="button"
            className="btn btn-primary"
            id="report"
            disabled={!placed}
            onClick={() => onReport()}
          >
            Report
          </button>
        </div>
      </div>
    </div>
  );
};

Control.propTypes = {
  placed: PropTypes.bool,
  onMove: PropTypes.func,
  onRotate: PropTypes.func,
  onReport: PropTypes.func
};

export default Control;
