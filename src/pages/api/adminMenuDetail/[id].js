import connection from "../db";

export default (req, res) => {
  const orderId = req.query.id;
  connection.query("SELECT * FROM foods WHERE id = ?", [orderId], (err, result) => {
    if (err) {
      console.error(err);
      res.status(500).send("Internal Server Error");
      return;
    }

    console.info("adminManageFoods");
    res.send(result);
  });
};
