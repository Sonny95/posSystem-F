import React from "react";
import Image from "next/image";

interface burger {
  id: number;
  name: string;
  src: string;
}

interface categoriesProps {
  categories: burger[];
}

function Categories({ categories }: categoriesProps) {
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
        {categories?.map((values) => (
          <div
            key={values.id}
            className="rounded-lg cursor-pointer ounded-lg w-[110px] h-[95px] bg-white flex flex-col items-center justify-center my-[20px] hover:bg-[#003049] hover:text-white text-black"
          >
            <div className="w-[110px] h-[65px] flex flex-col items-center justify-center">
              <img src={values.src} className="w-[30px] h-[30px]" />
              <p>{values.name}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Categories;
