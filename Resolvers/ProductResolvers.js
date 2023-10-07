const ProductModel = require("../Modal/ProductModel");

const GetProduct = async () => {
  const Product = ProductModel.find();
  return Product;
};

const GetProductById = async (_, { _id }) => {
  const ProductById = ProductModel.findOne({ _id });
  return ProductById;
};

const CreateProduct = async (_, { input }) => {
  try {
    // Create the product and store the result
    const createdProduct = await ProductModel.create(input);

    // Return the created product data
    return createdProduct;
  } catch (error) {
    // Handle the error and return an error message

    throw new Error("Failed to create product");
  }
};

const UpdateProductByid = async (_, { _id, input }) => {
  try {
    const Data = await ProductModel.findByIdAndUpdate({ _id }, input, {
      new: true,
    });
    return Data;
  } catch (error) {

  }
};

const DeleteProductById = async (_, { _id }) => {
  try {
    const Data = await ProductModel.findOneAndDelete({ _id });
    return Data;
  } catch (error) {

  }
};

module.exports = {
  GetProduct,
  GetProductById,
  UpdateProductByid,
  DeleteProductById,
  CreateProduct,
};
