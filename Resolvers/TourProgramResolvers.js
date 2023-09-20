const TourProgram = require("../Modal/TourModal");

const TourProgramRes = async (_, { month }) => {
  try {
    const AllTourPrograms = await TourProgram.find({ month: month });

    const Data = { TourProgram: AllTourPrograms };
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

module.exports = { TourProgramRes };
