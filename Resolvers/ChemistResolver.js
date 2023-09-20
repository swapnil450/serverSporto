const Chemist = require("../Modal/ChemModal");
const ChemistRes = async (_, { first, last, Area }) => {
  try {
    if (Area) {
      const chemAll = await Chemist.find().skip(first).limit(last).exec();
      const Chemists = chemAll?.filter((i) => Area.includes(i.Area));
      const AllChemist = await Chemist.find();
      const LengthChemist = AllChemist?.length;
      const Data = { lengthData: LengthChemist, Chemist: Chemists };
      return Data;
    }
    const AllChemists = await Chemist.find();
    const LengthChemist = AllChemists?.length;
    const Chemists = await Chemist.find().skip(first).limit(last).exec();
    const Data = { lengthData: LengthChemist, Chemist: Chemists };
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

module.exports = { ChemistRes };
