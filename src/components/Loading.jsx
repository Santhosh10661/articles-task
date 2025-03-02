import React from "react";

const Loading = () => {
  return (
    <div className="bg-gray-50  flex justify-center items-center h-dvh">
      <span className="relative flex size-10">
        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-gray-700 opacity-75"></span>
        <span className="relative inline-flex size-10 rounded-full bg-gray-800"></span>
      </span>
    </div>
  );
};

export default Loading;
