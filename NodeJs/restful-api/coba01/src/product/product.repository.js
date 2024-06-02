// berkomunikasi dengan database
// ORM, boleh raw query
const prisma = require("../database");

const findProducts = async () => {
  const products = await prisma.product.findMany();
  return products;
};

const findProduct = async (id) => {
  const products = await prisma.product.findUnique({
    where: {
      id,
    },
  });
  return products;
};

const insertProduct = async (data) => {
  const product = await prisma.product.create({
    data: {
      name: data.name,
      description: data.description,
      image: data.image,
      price: data.price,
    },
  });

  return product;
};

const deleteProduct = async (id) => {
  await prisma.product.delete({
    where: {
      id,
    },
  });
};

const editProduct = async (id, data) => {
  const product = await prisma.product.update({
    where: {
      id: parseInt(id),
    },
    data: {
      description: data.description,
      image: data.image,
      name: data.name,
      price: data.price,
    },
  });

  return product;
};
module.exports = {
  findProducts,
  findProduct,
  insertProduct,
  deleteProduct,
  editProduct,
};
