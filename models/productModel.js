const products = require("./data/products.json");

function findAll() {
  return new Promise((resolve, reject) => {
    resolve(prodcuts);
  });
}

module.exports = {
  findAll,
};
