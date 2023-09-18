const UserAuthModal = require("../Modal/UserAuthModal");

const user = async () => {
  const user = await UserAuthModal.find();
  return user;
};

const getUserById = async (_, { id }) => {
  try {
    const userSingle = await UserAuthModal.findOne({ _id: id });

    return userSingle;
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

module.exports = { user, getUserById };
