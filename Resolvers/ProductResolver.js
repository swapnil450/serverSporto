const PrRt = require("../Modal/PrRt");
const ProductRes = async (_, { first, last }) => {
  try {
    const AllProducts = await PrRt.find();
    const LengthProduct = AllProducts?.length;
    const Products = await PrRt.find().skip(first).limit(last).exec();
    const Data = { lengthData: LengthProduct, Product: Products };
    return Data;
  } catch (error) {
    return {
      error: {
        message: error.message,
        code: "USER_NOT_FOUND", // You can define error codes if needed
      },
      data: null, // Return null for the data field to indicate an error
    };
  }
};

module.exports = { ProductRes };
