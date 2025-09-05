import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";
import { ApolloProvider } from '@apollo/client';
import InfiniteTable from './InfiniteTable';
import Coderdle from './Coderdle';
import { ApolloClient, InMemoryCache } from '@apollo/client';

const client = new ApolloClient({
  uri: 'http://localhost:8080/graphql',
  cache: new InMemoryCache(),
});


const root = createRoot(document.getElementById("coderdle"));
root.render(
  <StrictMode>
  <ApolloProvider client={client}>
    <Coderdle />
  </ApolloProvider>
  </StrictMode>
);