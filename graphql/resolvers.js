const UserAuthModal = require("../Modal/UserAuthModal");

const {
  user,
  CreateUser,
  SignInUser,
  ChangePassword,
  DeleteUser
} = require("../Resolvers/UserResolvers");
const {
  CreateProduct,
  GetProductById,
  GetProduct,
  UpdateProductByid,
  DeleteProductById,
} = require("../Resolvers/ProductResolvers");
const {
  CreateOrder,
  GetOrderByEmail,
  DeleteOrder,
  UpdateOrder,
  GetAllOrders,
} = require("../Resolvers/OrderResolvers");
const resolvers = {
  // Queru the Data
  Query: {
    hello: () => "Hello word",
    user: user,
    products: GetProduct,
    ProductById: GetProductById,
    getOrderByEmailId: GetOrderByEmail,
    getAllOrders: GetAllOrders,
  },
  //   Mutation of Data
  Mutation: {
    createUser: CreateUser,
    SignInUser: SignInUser,
    CreateProduct: CreateProduct,
    updateProduct: UpdateProductByid,
    deleteProduct: DeleteProductById,
    DeleteUser: DeleteUser,
    ChangePassword: ChangePassword,
    createOrder: CreateOrder,
    DeleteOrder: DeleteOrder,
    UpdateOrder: UpdateOrder,
  },
};

module.exports = resolvers;
