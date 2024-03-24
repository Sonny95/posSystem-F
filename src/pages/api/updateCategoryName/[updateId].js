import connection from "../db";

export default (req, res) => {
  const categoryrId = req.query.updateId;
  const newName = req.body.newName;

  const updateNameQuery = "UPDATE `categories` SET name = ? WHERE id = ?";
  const updateNameValues = [newName, categoryrId];

  connection.query(updateNameQuery, updateNameValues, (err, result) => {
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
