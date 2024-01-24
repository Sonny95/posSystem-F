import connection from "../db";

export default (req, res) => {
  const orderId = req.query.updateId;
  console.log(orderId, "orderId");
  const newStatus = req.body.status;
  console.log(newStatus, "newStatus");

  const updateStatusQuery = "UPDATE `order` SET status = ? WHERE id = ?";
  const updateStatusValues = [newStatus, orderId];

  connection.query(updateStatusQuery, updateStatusValues, (err, result) => {
    if (err) {
      console.error("Error while updating status:", err);
      return res.status(500).json({
        code: 500,
        message: "Error while processing the request",
      });
    } else {
      console.log(result, "statusResult");
      return res.status(200).json({
        code: 200,
      });
    }
  });
};
