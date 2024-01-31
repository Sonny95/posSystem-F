import Link from "next/link";
import React, { useState } from "react";
import { useForm } from "react-hook-form";

function Signup() {
  const { register } = useForm();
  return (
    <div>
      <div className="w-full h-full flex items-center justify-center bg-gray-100">
        <div className="w-[500px] h-[744px] bg-gray-100 flex flex-col items-center justify-center">
          <img src="logo.png" className="mb-[30px]" />
          <div className="mb-[5px] text-2xg">Business Code</div>
          <input
            {...register("code", { required: true, maxLength: 10 })}
            name="code"
            className="w-[250px] h-[50px] bg-gray-200 mb-[30px] rounded-lg"
          ></input>
          <div className="mb-[5px] text-2xg">Name</div>
          <input
            {...register("Staff Name", { required: true, maxLength: 16 })}
            name="name"
            className="w-[250px] h-[50px] bg-gray-200 mb-[30px] rounded-lg"
          ></input>
          <div className="mb-[5px] text-2xg">Store Number</div>
          <input
            {...register("number", { required: true, maxLength: 10 })}
            name="number"
            className="w-[250px] h-[50px] bg-gray-200 mb-[30px] rounded-lg"
          ></input>
          <div className="mb-[5px] text-2xg">Password</div>
          <input
            {...register("password", { required: true, minLength: 8, maxLength: 16 })}
            name="password"
            className="w-[250px] h-[50px] bg-gray-200 mb-[30px] rounded-lg"
          ></input>
          <Link href={"/admin"}>
            <button className="w-[250px] h-[50px] bg-[#003049] z-10 text-white rounded-lg px-6 ">
              Login
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Signup;
