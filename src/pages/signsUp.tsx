import Link from "next/link";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import router from "next/router";

interface HookFormTypes {
  code: number;
  name: string;
  password: string;
  confirmPassword: string;
  multipleErrorInput: string;
}

function SignsUp() {
  const {
    register,
    formState: { errors },
    watch,
    handleSubmit,
  } = useForm<HookFormTypes>({ mode: "onChange" });

  const onSubmit = (data: HookFormTypes) => {
    console.log(onSubmit, "onsubmit");

    const sendData = {
      code: data.code,
      name: data.name,
      password: data.password,
    };
    console.log(sendData, "send");
    axios
      .post("/api/createUser", sendData)
      .then((updateResponse) => {
        console.log(updateResponse.status, "updateResponse.status");
        if (updateResponse.status === 200) {
          alert("User created successfully");
          router.push("/admin");
        }
      })
      .catch((statusError) => {
        console.log(statusError);
      });
    console.log(data, "data");
  };

  return (
    <div>
      <div className="w-full h-full flex items-center justify-center bg-gray-100">
        <div className="w-[500px] h-[744px] bg-gray-100 flex flex-col items-center justify-center">
          <img src="logo.png" className="mb-[30px]" />

          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="mb-[5px] text-2xg">Business Code</div>
            <input
              id="code"
              {...register("code", {
                minLength: { value: 4, message: "Business code must be at least 4 charaters" },
                maxLength: { value: 8, message: "Business code is maximum 8 charaters" },
              })}
              placeholder="1234"
              className="w-[250px] h-[50px] bg-gray-200 rounded-lg"
            ></input>
            <p>{errors.code?.message}</p>

            <div className="mb-[5px] text-2xg mt-[30px]">Staff Name</div>
            <input
              {...register("name", { required: { value: true, message: "Name is required" } })}
              id="name"
              placeholder="Mia Son"
              className="w-[250px] h-[50px] bg-gray-200 rounded-lg"
            ></input>

            <div className="mb-[5px] text-2xg mt-[30px]">Password</div>
            <input
              id="password"
              {...register("password", {
                minLength: { value: 8, message: "Password must be 8-16 charaters" },
                maxLength: { value: 16, message: "Password must be 8-16 charaters" },
              })}
              placeholder="8-16 numbers only "
              type="password"
              className="w-[250px] h-[50px] bg-gray-200 rounded-lg"
            ></input>
            <p>{errors.password?.message}</p>

            <div className="mb-[5px] text-2xg mt-[30px]">Confirm Password</div>
            <input
              {...register("confirmPassword", {
                validate: (value) => value === watch("password") || "Must be matched",
              })}
              id="confirmPassword"
              placeholder="ConfirmPassword"
              type="password"
              className="w-[250px] h-[50px] bg-gray-200 rounded-lg"
            ></input>
            <p>{errors.confirmPassword?.message}</p>

            {/* <Link href={"/admin"}> */}
            <button
              type="submit"
              className="w-[250px] h-[50px] bg-[#003049] z-10 text-white rounded-lg px-6 mt-[30px]"
            >
              Signs Up
            </button>
          </form>
          {/* </Link> */}
        </div>
      </div>
    </div>
  );
}

export default SignsUp;
