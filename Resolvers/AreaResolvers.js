const Area = require("../Modal/Area");
const AreaRes = async (_, { first, last }) => {
  try {
    const AllAreas = await Area.find();
    const LengthArea = AllAreas?.length;
    const Areas = await Area.find().skip(first).limit(last).exec();
    const Data = { lengthData: LengthArea, Area: Areas };
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

module.exports = { AreaRes };
