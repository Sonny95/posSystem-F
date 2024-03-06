import connection from "./db";

export default (req, res) => {
  connection.query("select * from categories", (err, result) => {
    console.info("categories");
    res.send(result);
  });
};
