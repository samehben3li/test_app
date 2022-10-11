import { API_URI } from "@env";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import AuthProvider from "./context/authContext";
import Main from "./screens/main";

const client = new ApolloClient({
  uri: API_URI,
  cache: new InMemoryCache(),
});

export default function App() {
  return (
    <AuthProvider>
      <ApolloProvider client={client}>
        <Main />
      </ApolloProvider>
    </AuthProvider>
  );
}
