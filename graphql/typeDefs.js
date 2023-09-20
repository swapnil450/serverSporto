const { gql } = require("apollo-server-express");
const typeDefs = gql`
  type Query {
    hello: String
    user: [user]
    getUserById(id: String!): user
    Doctor(first: Int, last: Int, Area: [String]): DoctorAll
    Chemist(first: Int, last: Int, Area: [String]): ChemistAll
    Stockiest(first: Int, last: Int, Area: [String]): StockiestAll
    Area(first: Int, last: Int): AreaAll
    HeadQ(first: Int, last: Int): HeadQAll
    Product(first: Int, last: Int): ProductAll
    FareChart(first: Int, last: Int): FareChartAll
    TourProgram(month: String): TourProgramAll
  }
  type Mutation {
    createUser(input: userIn!): user
  }
  scalar Date

  input userIn {
    Code: ID!
    pass: String
    empName: String
    userId: ID!
    mobile1: String
    Secmob: String
    address: String
    email: ID!
    post: String
    headquarters: String
    panNo: String
    adharNo: String
    bankAccountNo: String
    ifscCode: String
    dob: Date
    joiningDate: Date
    anniversaryDate: Date
    resignationDate: Date
    selectedAreas: [String]
    pvrRemark: String
    online: Boolean
    Active: Boolean
    Banned: Boolean
    otp: Int
    lat: String
    log: String
  }

  type user {
    _id: String!
    Code: ID!
    pass: String
    empName: String
    userId: ID!
    mobile1: String
    Secmob: String
    address: String
    email: ID!
    post: String
    headquarters: String
    panNo: String
    adharNo: String
    bankAccountNo: String
    ifscCode: String
    dob: Date
    joiningDate: Date
    anniversaryDate: Date
    resignationDate: Date
    selectedAreas: [String]
    pvrRemark: String
    online: Boolean
    Active: Boolean
    Banned: Boolean
    otp: Int
    lat: String
    log: String
  }

  type Doctor {
    _id: String!
    DoctorCode: String
    DoctorName: String
    HosName: String
    mobile: String
    address: String
    Area: String
    Degree: String
    Speciality: String
    Dob: Date
    Doa: Date
    P1: String
    P2: String
    approved: Boolean
    createdBy: String
    createdAt: Date
  }

  type Chemist {
    _id: String!
    chemCode: String
    chemName: String
    contactPer: String
    mobile: String
    address: String
    Area: String
    DLNo: String
    GSTNo: String
    DateOfBirth: String
    DateOfAni: String
    createdBy: String
    createdAt: Date
    approved: Boolean
  }

  type Stockiest {
    _id: String!
    Code: String
    contactPer: String
    Name: String
    mobile: String
    DLNo: String
    GSTNo: String
    DateOfBirth: String
    DateOfAni: String
    address: String
    Area: [String]
    Active: Boolean
    createdBy: String
    approved: Boolean
  }

  type DoctorAll {
    lengthData: Int
    Doctor: [Doctor]
  }
  type ChemistAll {
    lengthData: Int
    Chemist: [Chemist]
  }
  type StockiestAll {
    lengthData: Int
    Stockiest: [Stockiest]
  }
  type AreaAll {
    lengthData: Int
    Area: [Area]
  }

  type HeadQAll {
    lengthData: Int
    HeadQ: [Headquaters]
  }

  type ProductAll {
    lengthData: Int
    Product: [Product]
  }
  type FareChartAll {
    lengthData: Int
    FareChart: [FareChart]
  }
  type TourProgramAll {
    TourProgram: [TourProgram]
  }
  type Area {
   _id: String!
    AreaName: String
    Type: String
    Active: Boolean
  }
  type Headquaters {
    _id: String!
    HeadQuaterName: String
    Active: Boolean
  }

  type Product {
    _id: String!
    ProductName: String
    Packing: String
    MRP: Int
    PTR: Float
    PTS: Int
    scheme: [PobProSchema]
    Active: Boolean
  }

  type PobProSchema {
    id: String
    MainPro: String
    FreeProduct: String
  }
  type FareChart {
    _id: String
    FareName: String
    HeadQuaterName: String
    AreaName: String
    OneWayKM: Int
    FarePrice: Int
    TravelMode: String
    Active: Boolean
  }
  type TourProgram {
    _id: String!
    startDate: Date
    lastDate: Date
    post: String
    area: [String]
    month: String
    createdBy: String
    createdByName: String
    createdAt: Date
    DcrId: String
    Useable: Boolean
    SentToApv: Boolean
    Act: Boolean
    Apv: Boolean
  }
`;

module.exports = typeDefs;
