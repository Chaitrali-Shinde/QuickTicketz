import React from "react";

const StatusDisplay = ({ status }) => {
  return (
    <span className="inline-block rounded-full py-1 text-xs font-semibold text-grey-700 bg-green-400">
      {status}
    </span>
  );
};

export default StatusDisplay;
