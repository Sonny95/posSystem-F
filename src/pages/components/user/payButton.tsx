import React from "react";

interface PayButtonProps {
  cartTotalPrice: number;
  onClick: () => void;
}

function PayButton({ cartTotalPrice, onClick = () => {} }: PayButtonProps) {
  return (
    <div className="w-full h-full">
      <button
        onClick={onClick}
        className="w-full h-full bg-[#003049] z-10 text-white flex justify-between items-center rounded-lg px-6 "
      >
        <p>${cartTotalPrice.toFixed(2)}</p>
        <p>Pay {">"} </p>
      </button>
    </div>
  );
}

export default PayButton;
