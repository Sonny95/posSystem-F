import { useRouter } from "next/router";
import React, { useState } from "react";
import { signIn } from "next-auth/react";

function Login() {
  const [credentials, setCredentials] = useState({ code: "", password: "" });
  const router = useRouter();

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setCredentials((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const login = async (e: any) => {
    e.preventDefault();
    const response = await signIn("code-password-credential", {
      code: credentials.code,
      password: credentials.password,
      redirect: false,
    });
    console.log(response);
    // if (!response.error) {
    //   // 로그인 성공 후 리디렉션 처리
    //   router.push("/admin");
    // }
  };

  return (
    <div>
      <div className="w-full h-full flex items-center justify-center bg-gray-100">
        <form onSubmit={login}>
          <div className="w-[500px] h-[744px] bg-gray-100 flex flex-col items-center justify-center">
            <img src="logo.png" className="mb-[30px]" />
            <div className="mb-[5px] text-2xg">User Name</div>
            <input
              className="w-[250px] h-[50px] bg-gray-200 mb-[30px] rounded-lg"
              type="text"
              name="code"
              value={credentials.code}
              onChange={handleChange}
            />
            <div className="mb-[5px] text-2xg">Password</div>
            <input
              className="w-[250px] h-[50px] bg-gray-200 mb-[30px] rounded-lg"
              type="password"
              name="password"
              value={credentials.password}
              onChange={handleChange}
            />

            <button
              className="w-[250px] h-[50px] bg-[#003049] z-10 text-white rounded-lg px-6 "
              type="submit"
            >
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
