//  Service layer bertujuan untuk handle business logic
//  dan menghandle request dari controller

const { findProducts, findProduct, deleteProduct, insertProduct, editProduct } = require("./product.repository");

const getAllProducts = async () => {
  const products = await findProducts();
  return products;
};

const getProductById = async (id) => {
  const product = await findProduct(id);

  if (!product) {
    throw Error("Product not found");
  }

  return product;
};

const createNewProduct = async (data) => {
  const product = await insertProduct(data);
  return product;
};

const deleteProductById = async (id) => {
  await getProductById(id);

  await deleteProduct(id);
};

const editProductById = async (id, data) => {
  await getProductById(id);

  const product = editProduct(id, data);

  return product;
};

module.exports = { getAllProducts, getProductById, createNewProduct, deleteProductById, editProductById };
