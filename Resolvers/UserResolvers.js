const UserAuthModal = require("../Modal/UserAuthModal");
const bcrypt = require("bcrypt"); //for decript the values
const Jwt = require("jsonwebtoken"); // for generating jwt token
const dotenv = require("dotenv");
dotenv.config({ path: "../.env" });

const user = async (_, { first, last }) => {
  try {
    const skip = last > 0 ? Math.max(0, first - last) : 0;
    const limit = last > 0 ? last : first;
    const AllUser = await UserAuthModal.find()
    const user = await UserAuthModal.find().skip(skip).limit(limit).exec();
    const Data = {
      Data: user,
      length: AllUser?.length
    }
    return Data;
  } catch (error) {

  }
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

const DeleteUser = async (_, { _id }) => {
  try {
    await UserAuthModal.findOneAndDelete({ _id: _id });
    return {
      message: "User Deleted Sucessfully !",
      status: true
    };
  } catch (error) {
    return {
      message: "something Wrong !",
      status: false
    }
  }
}

const CreateUser = async (_, { input }, req, res) => {
  try {
    const { email, mobile, password, Active, name, acctype } = input;
    const UserAlreadyAdded = await UserAuthModal.findOne({
      email,
    });
    const MobileAlreadyAdded = await UserAuthModal.findOne({
      mobile,
    });
    if (UserAlreadyAdded) {
      return {
        user: null,
        error: {
          message: "User Is Already Added!",
        },
        message: null,
      };
    }
    if (MobileAlreadyAdded) {
      return {
        user: null,
        error: {
          message: "Mobile Number Already Added!",
        },
        message: null,
      };
    }

    const EncryptedPassword = await bcrypt.hash(password, 10);

    const DecryptedUserData = {
      name,
      password: EncryptedPassword,
      email,
      mobile,
      Active,
      acctype,
    };

    const newUser = await UserAuthModal.create(DecryptedUserData);

    return {
      user: newUser,
      error: null,
      message: "Sign up successfully",
    };
  } catch (error) {
    return {
      user: null,
      error: {
        message: error.message,
      },
      message: null,
    };
  }
};

const SignInUser = async (_, { data, hash }) => {
  try {
    const { email, password } = data;

    const User = await UserAuthModal.findOne({ email });

    if (!User) {
      return {
        User: null,
        error: {
          message: "User Not Found",
        },
        message: "User Not Found",
      };
    }

    if (password) {
      const IsPassValid = await bcrypt.compare(password, User.password);
      if (!IsPassValid) {
        return {
          User: null,
          error: {
            message: "Password Not Valid",
          },
          message: "Password Not Valid",
        };
      }
    }

    const TokenForLogin = Jwt.sign({ id: User._id }, process.env.AUTH_KEY, {
      expiresIn: "1h",
    });

    if (TokenForLogin) {
      const UserID = Jwt.verify(TokenForLogin, process.env.AUTH_KEY);
      const User = await UserAuthModal.findOne({ _id: UserID.id }).select(
        "-password"
      );
      return {
        User: User,
        error: {
          message: null,
        },
        message: "User Login Successfully !",
      };
    }

    return {
      User: null,
      error: {
        message: null,
      },
      message: "Something Went Wrong !",
    };
  } catch (error) {
    return {
      Token: null,
      error: {
        message: error.message,
      },
      message: null,
    };
  }
};

const ChangePassword = async (_, { input }) => {
  try {
    const { OldPassword, NewPassword, email } = input;

    const User = await UserAuthModal.findOne({ email });

    if (!User) {
      return {
        User: null,
        error: {
          message: "User not found",
        },
        message: "User not found",
      };
    }

    if (OldPassword) {
      const IsCheckOldPassword = await bcrypt.compare(
        OldPassword,
        User.password
      );
      if (!IsCheckOldPassword) {
        return {
          User: null,
          error: {
            message: "Old Password doesn't match",
          },
          message: "Old Password doesn't match",
        };
      }
    }

    const EncryptedPassword = await bcrypt.hash(NewPassword, 10);

    // Update the password in the database
    User.password = EncryptedPassword;
    await User.save();

    return {
      User: User, // You can also return the updated user object here
      message: "Password changed successfully",
    };
  } catch (error) {
    return {
      User: null,
      error: {
        message: error.message,
      },
      message: "Something went wrong",
    };
  }
};

module.exports = { user, getUserById, CreateUser, SignInUser, ChangePassword, DeleteUser };
