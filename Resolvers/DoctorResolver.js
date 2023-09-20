const Doctor = require("../Modal/DoctorModal");
const DoctorRes = async (_, { first, last, Area }) => {
  try {
    if (Area) {
      const DocAll = await Doctor.find().skip(first).limit(last).exec();
      const Doctors = DocAll?.filter((i) => Area.includes(i.Area));
      const AllDoctors = await Doctor.find();
      const LengthDoctor = AllDoctors?.length;
      const Data = { lengthData: LengthDoctor, Doctor: Doctors };
      return Data;
    }
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
