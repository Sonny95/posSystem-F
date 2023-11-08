import React from "react";

function CompleteButton() {
  return (
    <div className="w-full h-full">
      <button className="w-full h-full bg-gray-100 z-10 flex justify-between items-center rounded-lg px-6 hover:bg-[#003049] hover:text-white text-gray-400">
        <p>Complete</p>
        <p>{">"} </p>
      </button>
    </div>
  );
}

export default CompleteButton;
