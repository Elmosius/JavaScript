// fungsi controller untuk handle req dan response
// handle validasi body

const express = require("express");
const router = express.Router();
const { getAllProducts, getProductById, createNewProduct, deleteProductById, editProductById } = require("./product.service");

router.get("/", async (req, res) => {
  const products = await getAllProducts();
  res.send(products);
  res.end();
});

router.get("/:id", async (req, res) => {
  try {
    const id = parseInt(req.params.id);
    const product = await getProductById(id);
    res.send(product);
  } catch (error) {
    res.status(400).send(error.message);
  }

  res.end();
});

router.post("/", async (req, res) => {
  try {
    const newProduct = req.body;
    const products = await createNewProduct(newProduct);
    res.status(201).send({
      data: products,
      message: "success",
    });
  } catch (error) {
    res.status(400).send(error.message);
  }

  res.end();
});

router.delete("/:id", async (req, res) => {
  try {
    const id = parseInt(req.params.id);
    await deleteProductById(id);
    res.send("Deleted");
  } catch (error) {
    res.status(400).send(error.message);
  }

  res.end();
});

router.put("/:id", async (req, res) => {
  const id = parseInt(req.params.id);
  const newProduct = req.body;

  if (!(newProduct.description && newProduct.image && newProduct.name && newProduct.price)) {
    return res.status(400).send("Data tidak lengkap");
  }

  try {
    const product = editProductById(id, newProduct);
    res.status(200).send({
      data: product,
      message: "success updated",
    });
  } catch (error) {
    res.status(400).send(error.message);
  }
  res.end();
});

router.patch("/:id", async (req, res) => {
  try {
    const id = parseInt(req.params.id);
    const newProduct = req.body;

    const product = editProductById(id, newProduct);
    res.status(200).send({
      data: product,
      message: "success updated",
    });
  } catch (error) {
    res.status(400).send(error.message);
  }

  res.end();
});

module.exports = router;
