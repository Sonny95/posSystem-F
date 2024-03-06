import connection from "../db";

export default (req, res) => {
  const orderId = req.query.id;
  connection.query("SELECT * FROM orderItems WHERE orderNumber = ?", [orderId], (err, result) => {
    if (err) {
      console.error(err);
      res.status(500).send("Internal Server Error");
      return;
    }

    console.info("adminOrderDetail");
    res.send(result);
  });
};
