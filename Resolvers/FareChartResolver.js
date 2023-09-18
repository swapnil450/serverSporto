const Fare = require("../Modal/Fare");
const FareChartRes = async (_, { first, last }) => {
  try {
    const AllFareCharts = await Fare.find();
    const LengthFareChart = AllFareCharts?.length;
    const FareCharts = await Fare.find().skip(first).limit(last).exec();
    const Data = { lengthData: LengthFareChart, FareChart: FareCharts };
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

module.exports = { FareChartRes };
