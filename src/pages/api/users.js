import connection from "./db";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export default (req, res) => {
  // find users from DB
  let codeQuery = `select * from users where code = '${req.body.code}'`;
  connection.query(codeQuery, (err, result) => {
    if (err) {
      console.info(err, "err");
      return res.status(500).send({
        code: 500,
        message: "Internal Server Error",
      });
    }

    // user is not defined
    if (result.length >= 1) {
      return res.send({
        code: 409,
      });
    }

    const user = result[0];

    // compare password
    bcrypt.compare(password, user.password, (bcryptErr, bcryptResult) => {
      if (bcryptErr) {
        return res.status(500).send({
          code: 500,
          message: "Internal Server Error",
        });
      }

      if (!bcryptResult) {
        // wrong password
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

      // JWT token save to cookie
      res.cookie("token", token, { httpOnly: true, maxAge: 3600000 }); // 1시간 동안 유효

      return res.status(200).send({
        code: 200,
        message: "Login successful",
      });
    });
  });
};
