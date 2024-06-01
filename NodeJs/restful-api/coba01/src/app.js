const express = require("express");
const dotenv = require("dotenv");
const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();
const app = express();

dotenv.config();

const PORT = process.env.PORT;

app.get("/products", async (req, res) => {
  const products = await prisma.product.findMany();
  res.send(products);
});

app.post("/products", async (req, res) => {
  const newProduct = req.body;

  const products = await prisma.product.create({
    data: {
      name: newProduct.name,
      description: newProduct.description,
      image: newProduct.image,
      price: newProduct.price,
    },
  });
  res.status(201).send("success");
});

app.listen(PORT, () => {
  console.log("Server is running on port " + PORT);
});
