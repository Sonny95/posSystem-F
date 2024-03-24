import connection from "../db";

export default (req, res) => {
  const menuId = req.query.updateId;
  const newPrice = req.body.newPrice;
  const newName = req.body.newName;

  let updateQuery = "";
  let updateValues = [];

  if (newPrice && newName) {
    // food and price togeter
    updateQuery = "UPDATE `foods` SET price = ?, name = ? WHERE id = ?";
    updateValues = [newPrice, newName, menuId];
  } else if (newPrice) {
    // received only price
    updateQuery = "UPDATE `foods` SET price = ? WHERE id = ?";
    updateValues = [newPrice, menuId];
  } else if (newName) {
    // received only name
    updateQuery = "UPDATE `foods` SET name = ? WHERE id = ?";
    updateValues = [newName, menuId];
  }

  connection.query(updateQuery, updateValues, (err, result) => {
    if (err) {
      console.error("Error while updating status:", err);
      return res.status(500).json({
        code: 500,
        message: "Error while processing the request",
      });
    } else {
      return res.status(200).json({
        code: 200,
      });
    }
  });
};
