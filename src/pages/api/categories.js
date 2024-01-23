import connection from "./db";

export default (req, res) => {
  connection.query("select * from categories", (err, result) => {
    console.log("categories");
    res.send(result);
  });
};
