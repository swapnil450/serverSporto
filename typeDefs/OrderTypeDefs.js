const { gql } = require("apollo-server-express");

const ORDER_TYPE = gql`
  type Query {
    getOrderByEmailId(id: String!): [Order]
    getAllOrders(first: Int, last: Int, createdAt: String): OrderData
    GetOrderByMonthYear(year: String, month: String): OrderData
  }

  type Mutation {
    createOrder(orderInput: OrderInput): message
    DeleteOrder(_id: String): message
    UpdateOrder(_id: String, input: OrderInput): message
  }

  type message {
    message: String
    status: Boolean
  }

  type OrderData {
    Data: [Order]
    length: Int
  }

  type OrderProduct {
    product: String
    id: String
    price: String
    image: String
    qnt: String
    selWght: String
    selPrice: String
    stock: String
    form: String
  }

  type Address {
    state: String
    city: String
    pincode: String
    referenceMobileNumber: String
    deliveryAddress: String
    _id: String
  }

  type Order {
    _id: String
    PaymentMode: String
    productsDetails: [OrderProduct]
    orderid: String
    address: [Address]
    totalAmount: Int
    month: String
    email: String
    name: String
    time: String
    active: Boolean
    process: Boolean
    delivered: Boolean
    canceled: Boolean
    canceledByUser: Boolean
    createdAt: String
  }

  input OrderProductInput {
    product: String
    id: String
    price: String
    image: String
    qnt: Int
    email: String
    selWght: String
    selPrice: String
    stock: String
    form: String
  }

  input AddressInput {
    state: String
    city: String
    pincode: String
    referenceMobileNumber: String
    deliveryAddress: String
  }

  input OrderInput {
    PaymentMode: String
    productsDetails: [OrderProductInput]
    orderid: String
    address: [AddressInput]
    totalAmount: Int
    month: String
    email: String
    name: String
    time: String
    active: Boolean
    process: Boolean
    delivered: Boolean
    canceled: Boolean
    canceledByUser: Boolean
    createdAt: String
  }
`;
module.exports = { ORDER_TYPE };
