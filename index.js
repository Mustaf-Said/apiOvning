// Create an Express application
const express = require("express");
// Create an Express application
const app = express();
// Parse JSON bodies (as sent by API clients)
app.use(express.json());
// Parse URL-encoded bodies (as sent by HTML forms)
app.use(express.urlencoded({ extended: true }));
// Parse URL-encoded bodies (as sent by HTML forms)
app.get("/", (_, res) => {
  res.send("Hello Musse to World iam comming!");
});

// Using Node.js `require()`
const mongoose = require("mongoose");

// Connect to MongoDB
mongoose
  .connect(
    "mongodb+srv://86mussai:Raygal99@mongodb.qpqcb.mongodb.net/NodeAPI?retryWrites=true&w=majority&appName=MongoDB"
  )
  .then(() => console.log("Connected!"))
  .catch((err) => console.log(err));

// Using Node.js `require()`
const productSchema = require("./product/product.models.js");

//Create a products
/* 
app.post("/product", async (_, res) => {
  try {
    const product = await productSchema.create(
      {
        name: "Saft",
        quantity: 19,
        price: 15,
        Image: "https://www.google.com",
      },
      {
        name: "Tea",
        quantity: 15,
        price: 13,
        Image: "https://www.google.com",
      }
    );
    res.status(200).json(product);
  } catch (err) {
    res.status(404).json(err);
  }
});*/

//Find all products
app.get("/product", async (_, res) => {
  try {
    const products = await productSchema.find();
    res.status(200).json(products);
  } catch (err) {
    res.status(404).json(err);
  }
});

//Find product by id
app.get("/product/:id", async (req, res) => {
  try {
    const product = await productSchema.findById(req.params.id);
    res.status(200).json(product);
  } catch (err) {
    res.status(404).json(err);
  }
});

//Crreate singel product inside the database
app.post("/product", async (req, res) => {
  try {
    const product = await productSchema.create(req.body);
    res.status(200).json(product);
  } catch (err) {
    res.status(404).json(err);
  }
});

//Update product by id
app.put("/product/:id", async (req, res) => {
  try {
    const product = await productSchema.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    res.status(200).json(product);
  } catch (err) {
    res.status(404).json(err);
  }
});

//Delete product by id
app.delete("/product/:id", async (req, res) => {
  try {
    const product = await productSchema.findByIdAndDelete(req.params.id);
    res.status(200).json(product);
  } catch (err) {
    res.status(404).json(err);
  }
});

//Update product by listening
app.listen(5000, () => {
  console.log("Server is running on port 5000");
});
