import React from "react";

const Loader = () => {
  return (
    <span className="relative flex h-8 w-8">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-yellow-300 opacity-75"></span>
        <span className="relative inline-flex rounded-full h-8 w-8 bg-yellow-400"></span>
      </span>
  );
};

export default Loader;
