import connection from "./db";

export default (req, res) => {
  const page = req.query.page || 1;
  const itemsPerPage = 10;
  const offset = (page - 1) * itemsPerPage;
  const selectedStatus = req.query.status || "Pending";
  const whereClause =
    selectedStatus === "Pending"
      ? "WHERE status = 'Pending' OR status IS NULL"
      : "WHERE status = 'Completed'";

  // check status between pending or status
  connection.query(
    `SELECT COUNT(*) as totalCount FROM \`order\` ${whereClause}`,
    (err, countResult) => {
      if (err) {
        console.error(err);
        res.status(500).send("Internal Server Error");
        return;
      }

      const totalCount = countResult[0].totalCount;
      const totalPages = Math.ceil(totalCount / itemsPerPage);

      // return the page items
      connection.query(
        `SELECT * FROM \`order\` ${whereClause} ORDER BY \`orderTime\` DESC LIMIT ${itemsPerPage} OFFSET ${offset}`,
        (err, result) => {
          if (err) {
            console.error(err);
            res.status(500).send("Internal Server Error");
            return;
          }

          res.send({ data: { result, totalPages } });
        }
      );
    }
  );
};
