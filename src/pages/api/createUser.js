import connection from "./db";

export default (req, res) => {
  const createUsers = "INSERT INTO `createUser` (code, name, password) VALUES (?, ?, ?)";
  const userValues = [req.body.code, req.body.name, req.body.password];

  connection.query(createUsers, userValues, (err, orderResult) => {
    if (err) {
      console.error("Error while beginning transaction:", err);
      return res.status(500).json({
        code: 500,
        message: "Error while processing the request",
      });
    } else {
      console.log(orderResult, "orderResult");
      return res.status(200).json({
        code: 200,
      });
    }
  });
};
