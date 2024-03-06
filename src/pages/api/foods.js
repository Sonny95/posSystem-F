import connection from "./db";

export default (req, res) => {
  connection.query("SELECT * FROM foods", (err, result) => {
    console.info("foods");
    res.send(result);
  });
};
