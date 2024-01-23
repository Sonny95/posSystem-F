import connection from "./db";

export default (req, res) => {
  if (!req.body.orderTime || typeof req.body.orderTime !== "string") {
    return res.status(400).json({
      code: 400,
      message: "Invalid orderTime. Please provide a valid date or timestamp.",
    });
  }

  const inputDateTime = new Date(req.body.orderTime);

  // Check if inputDateTime is a valid date
  if (isNaN(inputDateTime)) {
    return res.status(400).json({
      code: 400,
      message: "Invalid orderTime. Please provide a valid date or timestamp.",
    });
  }
  const formattedDateTime = inputDateTime.toISOString().slice(0, 19).replace("T", " ");

  const insertOrder =
    "INSERT INTO `order` (orderTime, totalPrice, payment, totalQty) VALUES (?, ?, ?, ?)";
  const OrderValues = [formattedDateTime, req.body.totalPrice, req.body.payment, req.body.totalQty];

  //regarding transaction error
  connection.beginTransaction((err) => {
    if (err) {
      console.error("Error while beginning transaction:", err);
      return res.status(500).json({
        code: 500,
        message: "Error while processing the request",
      });
    }

    //Insert order table
    connection.query(insertOrder, OrderValues, (err, orderResult) => {
      if (err) {
        console.error("Error while inserting order data:", err);
        //reverse when error
        connection.rollback(() => {
          console.error("Transaction rolled back.");
          return res.status(500).json({
            code: 500,
            message: "Error while processing the request",
          });
        });
      } else {
        const orderNumber = orderResult.insertId;

        //received a object data from client
        const orderItemsRequests = req.body.items.map((cartItem) => ({
          orderNumber: orderNumber,
          item: cartItem.name,
          qty: cartItem.cartQuantity,
        }));

        const insertOrderItems = "INSERT INTO `orderItems` (orderNumber, item, qty) VALUES ?";

        const orderItemsValues = orderItemsRequests.map((orderItem) => [
          orderItem.orderNumber,
          orderItem.item,
          orderItem.qty,
        ]);
        //INSERT to ORDERITEMS table
        connection.query(insertOrderItems, [orderItemsValues], (err, itemResult) => {
          if (err) {
            //if fail reverse it
            console.error("Error while inserting order items data:", err);
            connection.rollback(() => {
              console.error("Transaction rolled back.");
              return res.status(500).json({
                code: 500,
                message: "Error while processing the request",
              });
            });
          } else {
            connection.commit((commitError) => {
              if (commitError) {
                console.error("Error while committing transaction:", commitError);
                connection.rollback(() => {
                  console.error("Transaction rolled back.");
                  return res.status(500).json({
                    code: 500,
                    message: "Error while processing the request",
                  });
                });
              } else {
                console.log(itemResult, "itemResult");
                return res.status(200).json({
                  code: 200,
                });
              }
            });
          }
        });
      }
    });
  });
};
