import connection from "./db";

export default (req, res) => {
  connection.query("select * from adminCategories", (err, result) => {
    console.log("adminCategories");
    res.send(result);
  });
};
