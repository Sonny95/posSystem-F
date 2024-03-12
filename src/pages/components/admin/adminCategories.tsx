"use client";

import React from "react";
import Image from "next/image";
import router from "next/router";

interface category {
  id: number;
  name: string;
  src: string;
}

interface categories {
  categories: category[];
}

function AdminCategories({ categories }: categories) {
  //go back to /
  const LogoutClicked = (category: any) => {
    if (category.name === "Logout") {
      router.push("/");
    } else {
      alert("This is not available yet. They will be updated later.");
    }
  };

  return (
    <div className="w-[126px] h-full flex flex-col  mt-[20px] ">
      {/* Logo container */}
      <div className="w-[102px] h-[102px] mt-[10px] ml-[16px] flex flex-col items-center justify-center ">
        <img
          src="/logo.png"
          className="w-[91px] h-[51px] flex flex-col items-center justify-cente "
        />
      </div>
      {/* categories container */}
      <div className="w-[80px] h-full  ml-[28px] ">
        {categories?.map((values) => (
          <div
            onClick={() => {
              LogoutClicked(values);
            }}
            key={values.id}
            className="rounded-lg cursor-pointer ounded-lg w-[80px] h-[80px] bg-white flex flex-col items-center justify-center my-[20px] hover:bg-[#003049] hover:text-white text-black"
          >
            <div className="w-[65px] h-[65px] flex flex-col items-center justify-center">
              <img src={values.src} className="w-[20px] h-[20px] mb-[10px]" />
              <p className="text-xxs">{values.name}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default AdminCategories;
