import connection from "./db";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export default (req, res) => {
  // 데이터베이스에서 사용자 찾기
  let codeQuery = `select * from users where code = '${req.body.code}'`;
  console.log(req.body.code, "req.body.code");
  connection.query(codeQuery, (err, result) => {
    if (err) {
      console.log(err, "err");
      return res.status(500).send({
        code: 500,
        message: "Internal Server Error",
      });
    }

    // 사용자가 존재하지 않는 경우
    if (result.length >= 1) {
      return res.send({
        code: 409,
      });
    }

    const user = result[0];

    // 비밀번호 비교
    bcrypt.compare(password, user.password, (bcryptErr, bcryptResult) => {
      if (bcryptErr) {
        return res.status(500).send({
          code: 500,
          message: "Internal Server Error",
        });
      }

      if (!bcryptResult) {
        // 비밀번호가 일치하지 않는 경우
        return res.status(401).send({
          code: 401,
          message: "Incorrect password",
        });
      }
      const token = jwt.sign(
        {
          userId: user.id,
          userType: user.type,
        },
        "secret-key",
        {
          expiresIn: "1h",
        }
      );

      // JWT 토큰을 쿠키에 설정
      res.cookie("token", token, { httpOnly: true, maxAge: 3600000 }); // 1시간 동안 유효

      // 로그인 성공
      return res.status(200).send({
        code: 200,
        message: "Login successful",
      });
    });
  });
};
