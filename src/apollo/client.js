import { ApolloClient, InMemoryCache} from '@apollo/client';

export const client = new ApolloClient({
    uri: 'https://api.tanda.kg/graphql/',
    cache: new InMemoryCache(),
  });