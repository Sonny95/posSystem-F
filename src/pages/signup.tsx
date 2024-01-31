import Link from "next/link";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message";

interface HookFormTypes {
  code: number;
  name: string;
  password: string;
  confirmPassword: string;
  multipleErrorInput: string;
}

function Signup() {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<HookFormTypes>({
    criteriaMode: "all",
  });
  const onSubmit = (data: HookFormTypes) => console.log(data);

  return (
    <div>
      <div className="w-full h-full flex items-center justify-center bg-gray-100">
        <div className="w-[500px] h-[744px] bg-gray-100 flex flex-col items-center justify-center">
          <img src="logo.png" className="mb-[30px]" />
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="mb-[5px] text-2xg">Business Code</div>
            <input
              {...register("code", { required: true, maxLength: 10 })}
              name="code"
              placeholder="1234"
              className="w-[250px] h-[50px] bg-gray-200 mb-[30px] rounded-lg"
            ></input>
            <div className="mb-[5px] text-2xg">Staff Name</div>
            <input
              {...register("name", { required: true, maxLength: 16 })}
              name="name"
              placeholder="Mia Son"
              className="w-[250px] h-[50px] bg-gray-200 mb-[30px] rounded-lg"
            ></input>
            <div className="mb-[5px] text-2xg">Password</div>
            <input
              {...register("password", {
                required: true,
                minLength: {
                  value: 16,
                  message: "Password should be 8-16 numbers.",
                },
                maxLength: {
                  value: 16,
                  message: "Password should be 8-16 numbers.",
                },
              })}
              name="password"
              placeholder="8-16 numbers only "
              className="w-[250px] h-[50px] bg-gray-200 mb-[30px] rounded-lg"
            ></input>
            <ErrorMessage
              errors={errors}
              name="password"
              render={({ messages }) =>
                messages &&
                Object.entries(messages).map(([type, message]) => <p key={type}>{message}</p>)
              }
            />
            <div className="mb-[5px] text-2xg">Confirm Password</div>
            <input
              {...register("password", {
                validate: (value) => value === "1" || "Confirm Your Email",
              })}
              name="confirm password"
              placeholder="ConfirmPassword"
              className="w-[250px] h-[50px] bg-gray-200 mb-[30px] rounded-lg"
            ></input>
            <ErrorMessage
              errors={errors}
              name="confirmPassword"
              render={({ messages }) =>
                messages &&
                Object.entries(messages).map(([type, message]) => <p key={type}>{message}</p>)
              }
            />
          </form>

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
