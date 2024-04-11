const express = require("express");
const { ApolloServer, gql } = require("apollo-server-express");
const cors = require("cors");
const helmet = require("helmet");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config({ path: "./.env" });
app.use(helmet());
app.use(
  cors({
    origin: [
      "http://localhost:3000",
      "http://localhost:3001",
      // "https://sbtadmin.vercel.app",
      // "https://www.soilboostertechnologies.in",
    ], // Change this to your frontend's URL
    optionsSuccessStatus: 200,
  })
);

const typeDefs = require("./graphql/typeDefs");
const resolvers = require("./graphql/resolvers");

const apolloServerStarter = async () => {
  try {
    const Server = new ApolloServer({
      typeDefs,
      resolvers,
    });
    await Server.start();
    Server.applyMiddleware({ app: app, path: "/graph" });
    await mongoose.connect(`${process.env.MONGODB_URL}`, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
    });
    console.log("database Connected....");
    app.get("/", (req, res) => {
      res.send("we are live!");
    });
    app.listen(8000, () => console.log("server is running on port 8000 !"));
  } catch (error) {
    console.log(error);
  }
};

apolloServerStarter();
