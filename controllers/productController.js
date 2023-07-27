const Product = require("../model/Product");
const productDetails = require("../model/productData");
//get all product
const product_all = async (req, res) => {
  try {
    //  const products = await Product.find();
    console.log(productDetails);
    res.json(productDetails);
  } catch (error) {
    res.json({ message: error });
  }
};

//single product
const product_details = async (req, res) => {
  try {
    const product = await Product.findById(req.params.productId);
    res.json(product);
  } catch (error) {
    res.json({ message: error });
  }
};

// add new product
const product_create = async (req, res) => {
  const product = Product({
    name: req.body.name,
    tag: req.body.tag,
    color: req.body.color,
    criteria: req.body.criteria,
  });

  try {
    const savedProduct = await product.save();
    res.json(savedProduct);
  } catch (error) {
    res.status(400).json(error);
  }
};

//update product
const product_update = async (req, res) => {
  const updatedProduct = await Product.findByIdAndUpdate(
    {
      _id: req.params.productId,
    },
    {
      name: req.body.name,
      tag: req.body.tag,
      color: req.body.color,
      criteria: req.body.criteria,
    },
    (err) => {
      if (err) {
        res.json({ msg: err });
      } else {
        res.json({ msg: "User Updated" });
      }
    }
  );
  // res.json(updatedProduct)
};

//delete product

const product_delete = async (req, res) => {
  try {
    const removeProduct = await Product.findByIdAndDelete(req.params.productId);
    res.json(removeProduct);
  } catch (error) {
    res.json({ message: error });
  }
};

module.exports = {
  product_all,
  product_create,
  product_delete,
  product_update,
  product_details,
};
