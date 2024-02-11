import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

export default NextAuth({
  providers: [
    CredentialsProvider({
      name: "code-password-credential",
      credentials: {
        code: { label: "code", type: "text", placeholder: "1234" },
        password: { label: "password", type: "password" },
      },
      async authorize(credentials, req) {
        // 사용자가 입력한 코드와 패스워드를 검증
        if (credentials.code === "1234" && credentials.password === "1234") {
          console.log("a");
          // 일치하는 경우 "/admin"으로 리디렉션
          return Promise.resolve("/admin");
        } else {
          // 일치하지 않는 경우 null 반환하여 로그인 페이지에 머무름
          return Promise.resolve(null);
        }
      },
    }),
  ],
  // where to go
  pages: {
    signIn: "/login", // 로그인 페이지 경로 지정
    callbackUrl: "/admin", // 로그인 후 리디렉션할 페이지 지정
  },
});
