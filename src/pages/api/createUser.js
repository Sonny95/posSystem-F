import connection from "./db";
import bcrypt from "bcrypt";

export default (req, res) => {
  const { code, name, password } = req.body;

  // hassign password
  bcrypt.hash(password, 10, (hashErr, hash) => {
    if (hashErr) {
      console.error("Error while hashing password:", hashErr);
      return res.status(500).json({
        code: 500,
        message: "Error while processing the request",
      });
    }

    // add users
    const createUserQuery = "INSERT INTO `users` (code, name, password) VALUES (?, ?, ?)";
    const userValues = [code, name, hash];

    connection.query(createUserQuery, userValues, (queryErr, result) => {
      if (queryErr) {
        console.error("Error while executing query:", queryErr);
        return res.status(500).json({
          code: 500,
          message: "Error while processing the request",
        });
      }

      console.info("User created successfully:", result);
      return res.status(200).json({
        code: 200,
        message: "User created successfully",
      });
    });
  });
};
