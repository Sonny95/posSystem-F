import router from "next/router";
import React, { useState } from "react";
import axios from "axios";
import { useForm } from "react-hook-form";
import Cookies from "universal-cookie";

interface HookFormTypes {
  code: number;
  password: string;
}

function Login() {
  const {
    register,
    formState: { errors },
    watch,
    handleSubmit,
  } = useForm<HookFormTypes>({ mode: "onChange" });

  const onSubmit = (data: HookFormTypes) => {
    const cookies = new Cookies();

    const userData = {
      code: data.code,
      password: data.password,
    };

    axios
      .post("/api/users", userData)
      .then((updateResponse) => {
        if (updateResponse.status === 200) {
          cookies.set("token", updateResponse.data.token);
          alert("Login successfuly");
          router.push("/admin");
        } else {
          alert("Code or Password defined");
        }
      })
      .catch((statusError) => {
        console.info(statusError);
      });
  };

  return (
    <div>
      <div className="w-full h-screen flex items-center justify-center bg-gray-100">
        <div className="w-[500px] h-[744px] bg-gray-100 flex flex-col items-center justify-center">
          <img src="logo.png" className="mb-[30px]" />
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="mb-[5px] text-2xg">User Code</div>
            <input
              id="code"
              className="w-[250px] h-[50px] bg-gray-200 mb-[30px] rounded-lg"
              {...register("code", {
                required: "Code is required",
                minLength: { value: 4, message: "Code must be at least 4 charaters" },
                maxLength: { value: 8, message: "Code is maximum 8 charaters" },
              })}
            />
            <p>{errors.code?.message}</p>
            <div className="mb-[5px] text-2xg">Password</div>
            <input
              id="password"
              {...register("password", {
                required: "Password is required",
                minLength: { value: 8, message: "Password must be 8-16 charaters" },
                maxLength: { value: 16, message: "Password must be 8-16 charaters" },
              })}
              className="w-[250px] h-[50px] bg-gray-200 mb-[30px] rounded-lg"
              type="password"
            />
            <p>{errors.password?.message}</p>

            <button
              className="w-[250px] h-[50px] bg-[#003049] z-10 text-white rounded-lg px-6 "
              type="submit"
            >
              Login
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
