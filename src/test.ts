import { DocumentNode } from "graphql";

// without these three lines the bundle is es5 compliant
import { ApolloClient, InMemoryCache } from "@apollo/client";
export const cache = new InMemoryCache();
const client = new ApolloClient({ cache: cache.restore({}) });

export const test = (t?: DocumentNode) => {
  console.log("ddabe");
  console.log(t);
};
