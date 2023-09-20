const express = require("express");
const { ApolloServer, gql } = require("apollo-server-express");
const cors = require("cors");
const app = express();
const mongoose = require("mongoose");
app.use(
  cors({
    origin: [
      "https://aviad.vercel.app",
      "https://avp-one.vercel.app",
      "http://localhost:3000",
    ], // Change this to your frontend's URL
    optionsSuccessStatus: 200,
  })
);

const typeDefs = require("./graphql/typeDefs");
const resolvers = require("./graphql/resolvers");

const apolloServerStarter = async () => {
  const Server = new ApolloServer({
    typeDefs,
    resolvers,
  });
  await Server.start();
  Server.applyMiddleware({ app: app, path: "/graph" });

  await mongoose.connect(
    "mongodb+srv://Avirosa:Avirosa717@avirosa.haorg1p.mongodb.net/?retryWrites=true&w=majority",
    {
      useUnifiedTopology: true,
      useNewUrlParser: true,
    }
  );
  console.log("database Connected....");

  app.get("/", (req, res) => {
    res.send("we are live!");
  });

  app.listen(8000, () => console.log("server is running on port 4000 !"));
};

// app.use("/", (req, res) => {
//   res.send("we are live");
// });

apolloServerStarter();
