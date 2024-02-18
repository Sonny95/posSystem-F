import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import axios from "axios";

export default NextAuth({
  providers: [
    CredentialsProvider({
      name: "Login to Admin",
      credentials: {
        username: { label: "Code", type: "text", placeholder: "1234" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials, req) {
        // Add logic here to look up the user from the credentials supplied
        const { code, password } = credentials;

        try {
          // 사용자 정보와 토큰을 서버로 전송
          const response = await axios.post("http://localhost:3000/api/users", { code, password });

          const data = response.data;

          if (data) {
            // 성공적으로 인증된 경우 사용자 정보 반환
            return { id: data.id, name: data.name, email: data.email };
          } else {
            // 실패한 경우 null 반환
            return null;
          }
        } catch (error) {
          // 에러 처리
          // console.error("Error authenticating user:", error);
          return null;
        }
      },
    }),
  ],
  callbacks: {
    async redirect(url, baseUrl) {
      // 콜백 URL을 admin 페이지로 설정
      return baseUrl + "/admin";
    },
  },
});
