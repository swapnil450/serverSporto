const Stockiest = require("../Modal/StockiestModal");
const StokiestRes = async (_, { first, last, Area }, context) => {
  try {
    const user = context.user; // Assuming you have access to the user object

    if (Area) {
      const StokAll = await Stockiest.find().skip(first).limit(last).exec();
      const Stokiests = StokAll?.filter((obj) =>
        Area.some((filterValue) => obj.Area.includes(filterValue))
      );

      const AllStock = await Stockiest.find();
      const LengthStokiest = AllStock?.length;
      const Data = { lengthData: LengthStokiest, Stockiest: Stokiests };
      return Data;
    }

    const AllStokiests = await Stockiest.find();
    const LengthStokiest = AllStokiests?.length;
    const Stokiests = await Stockiest.find().skip(first).limit(last).exec();

    const Data = { lengthData: LengthStokiest, Stockiest: Stokiests };
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

module.exports = { StokiestRes };
