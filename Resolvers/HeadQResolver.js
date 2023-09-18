const HeadQ = require("../Modal/HeadQ");
const HeadQRes = async (_, { first, last }) => {
  try {
    const AllHeadQs = await HeadQ.find();
    const LengthHeadQ = AllHeadQs?.length;
    const HeadQs = await HeadQ.find().skip(first).limit(last).exec();
    const Data = { lengthData: LengthHeadQ, HeadQ: HeadQs };
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

module.exports = { HeadQRes };
