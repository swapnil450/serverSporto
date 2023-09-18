const UserAuthModal = require("../Modal/UserAuthModal");

const Chemist = require("../Modal/ChemModal");
const Stockiest = require("../Modal/StockiestModal");
const Area = require("../Modal/Area");
const HeadQ = require("../Modal/HeadQ");
const Fare = require("../Modal/Fare");
const PrRt = require("../Modal/PrRt");
const { user, getUserById } = require("../Resolvers/UserResolvers");
const { DoctorRes } = require("../Resolvers/DoctorResolver");
const { ChemistRes } = require("../Resolvers/ChemistResolver");
const { StokiestRes } = require("../Resolvers/StokiestResolver");
const { AreaRes } = require("../Resolvers/AreaResolvers");
const { HeadQRes } = require("../Resolvers/HeadQResolver");

const { ProductRes } = require("../Resolvers/ProductResolver");

const { FareChartRes } = require("../Resolvers/FareChartResolver");

const resolvers = {
  // Queru the Data
  Query: {
    hello: () => "Hello word",
    user: user,
    getUserById: getUserById,
    Doctor: DoctorRes,
    Chemist: ChemistRes,
    Stockiest: StokiestRes,
    Area: AreaRes,
    HeadQ: HeadQRes,
    Product: ProductRes,
    FareChart: FareChartRes,
  },
  //   Mutation of Data
  Mutation: {
    createUser: async (_, { input }) => {
      try {
        const { email, Code, userId } = input;
        const UserAlreadyAdded = await UserAuthModal.findOne({
          email,
          Code,
          userId,
        });
        if (UserAlreadyAdded) {
          return {
            error: {
              message: "User IS AlReady Added !",
            },
          };
        }
        const data = await UserAuthModal.create(input);
        return data;
      } catch (error) {
        return {
          errors: {
            message: error.message,
          },
        };
      }
    },
  },
};

module.exports = resolvers;
