import React from "react";

function Categories() {
  const burgerName = [
    { id: 1, name: "Meals", price: 3.99, src: "/categories.png" },
    { id: 2, name: "Burgers", price: 4.79, src: "/categories2.png" },
    { id: 3, name: "Sides", price: 4.29, src: "/categories3.png" },
    { id: 4, name: "Drink", price: 3.99, src: "/categories4.png" },
    { id: 5, name: "Meals", price: 1.99, src: "/categories5.png" },
  ];

  return (
    // x/4 헸음 마진
    <div className="w-[126px] h-full flex flex-col">
      <div className="w-[110px] h-[24px] mt-[20px] flex ml-4">
        <img src="/arrow-left.png" className="w-[24px] h-[24px]" />
        <p> Back</p>
      </div>
      {/* Logo container */}
      <div className="w-[102px] h-[102px] mt-[10px] ml-4 flex flex-col items-center justify-center">
        <img
          src="/logo.png"
          className="w-[91px] h-[51px] flex flex-col items-center justify-cente"
        />
      </div>
      {/* categories container */}
      <div className="w-[110px] h-full  mt-[10px] ml-4 ">
        {burgerName.map((values) => (
          <div className="rounded-lg w-[110px] h-[95px] bg-white flex flex-col items-center justify-center my-[20px] hover:bg-[#003049]">
            <div className="w-[110px] h-[65px] flex flex-col items-center justify-center">
              <img src={values.src} className="w-[30px] h-[30px]" />
              <p>{values.name}</p>
            </div>
          </div>
        ))}
        {/* <div className="rounded-lg w-[110px] h-[95px] bg-white flex flex-col items-center justify-center">
          <div className="w-[110px] h-[65px] flex flex-col items-center justify-center">
            <img src="/categories.png" className="w-[30px] h-[30px]" />
            <p>Meals</p>
          </div>
        </div>

        <div className="rounded-lg w-[110px] h-[95px] bg-black flex flex-col items-center justify-center mt-5">
          <div className="w-[110px] h-[65px] flex flex-col items-center justify-center">
            <img src="/categories2.png" className="w-[30px] h-[30px]" />
            <p className="text-white">Burgers</p>
          </div>
        </div>

        <div className="rounded-lg w-[110px] h-[95px] bg-white flex flex-col items-center justify-center mt-5">
          <div className="w-[110px] h-[65px]  flex flex-col items-center justify-center">
            <img src="/categories3.png" className="w-[30px] h-[30px]" />
            <p>Meals</p>
          </div>
        </div>

        <div className="rounded-lg w-[110px] h-[95px] bg-white flex flex-col items-center justify-center mt-5">
          <div className="w-[110px] h-[65px]  flex flex-col items-center justify-center">
            <img src="/categories4.png" className="w-[30px] h-[30px]" />
            <p>Meals</p>
          </div>
        </div>

        <div className="rounded-lg w-[110px] h-[95px] bg-white flex flex-col items-center justify-center mt-5">
          <div className="w-[110px] h-[65px]  flex flex-col items-center justify-center">
            <img src="/categories.png" className="w-[30px] h-[30px]" />
            <p>Meals</p>
          </div>
        </div> */}
      </div>
    </div>
  );
}

export default Categories;
