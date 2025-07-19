import React from "react";

const LoadingSpinner = () => {
  return (
    <div className="flex items-center justify-center">
      <div
        className="h-5 w-5 animate-spin rounded-full border-l-[3px] border-t-[3px]"
        style={{
          borderColor: "#00aeff",
        }}
      ></div>
    </div>
  );
};

export default LoadingSpinner;
