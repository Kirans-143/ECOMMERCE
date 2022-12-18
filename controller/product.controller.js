let Products = require("./../model/product");
let dbConnection = require("./../config/db.config");

let getAllProducts = async (req, res, next) => {
  let products = await Products.findAll();
  res.writeHead(200, { "Content-Type": "application/json" });
  res.write(JSON.stringify(products));
  res.end();
};

let getProductById = async (req, res, next) => {
  let id = req.params.productId;
  if (!id) {
    res.status(400).send("ID not passed");
  }
  let products = await Products.findAll({
    where: {
      id: id,
    },
  });
  res.writeHead(200, { "Content-Type": "application/json" });
  res.write(JSON.stringify(products));
  res.end();
};

let createTable = async () => {
  await dbConnection.sync({ force: true });
  insertProducts();
  console.log("Product Table Is Crreated");
};

let insertProducts = async () => {
  await Products.bulkCreate([
    {
      name: "Samsung Galaxy Note",
      categoryId: 1,
      price: 18000,
    },
    {
      name: "Iphone 13",
      categoryId: 1,
      price: 60000,
    },
    {
      name: "Sony bravia",
      categoryId: 2,
      price: 40000,
    },
    {
      name: "Boat Rugged",
      categoryId: 3,
      price: 4000,
    },
    {
      name: "JBL Storm",
      categoryId: 4,
      price: 9000,
    },
    {
      name: "Vu 5",
      categoryId: 2,
      price: 32000,
    },
  ]);
};

let addNewProduct = async (req, res, next) => {
  try {
    let productToAdd = {
      name: req.body.name,
      price: req.body.price,
      categoryId: req.body.categoryId,
    };
    await Products.create(productToAdd);
    res.status(200).send("Product Added");
    res.end();
  } catch (err) {
    res.status(404).send("Something went wrong");
    next(err);
  }
};

// let updateProductById = async (req, res, next) => {
//   let id = req.params.productId;
//   let productToUpdate = {
//     name: req.body.name,
//     price: req.body.price,
//     ctegoryId: req.body.categoryId,
//   };
//   // await Products.update(productToUpdate, {
//   //   where: {
//   //     id: id,
//   //   },
//   // });
//   // let updateProduct = await Products.findByPk(id);
//   res.status(200).send(productToUpdate);
//   res.end();
// };
createTable(); //(no need to call it coz it will create automayticaly without createTable function)

module.exports = {
  getAllProducts,
  getProductById,
  addNewProduct,
  // updateProductById,
};
