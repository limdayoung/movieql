import { GraphQLServer } from "graphql-yoga";
import resolvers from "./graphql/resolver";

// const server = new GraphQLServer({ typeDefs, resolvers });
const server = new GraphQLServer({
  typeDefs: "graphql/schema.graphql",
  resolvers,
});
server.start(() => console.log("Server is running on localhost:4000"));
