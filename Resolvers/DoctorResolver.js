const Doctor = require("../Modal/DoctorModal");
const DoctorRes = async (_, { first, last }) => {
  try {
    const AllDoctors = await Doctor.find();
    const LengthDoctor = AllDoctors?.length;
    const Doctors = await Doctor.find().skip(first).limit(last).exec();
    const Data = { lengthData: LengthDoctor, Doctor: Doctors };
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

module.exports = { DoctorRes };
