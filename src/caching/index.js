import {ApolloClient, HttpLink, InMemoryCache} from '@apollo/client';
import MMKVStorage from 'react-native-mmkv-storage';
import {MMKVStorageWrapper, CachePersistor} from 'apollo3-cache-persist';
import {HOST} from '../../constants';

export const initCaching = async ({setClient, setPersistor}) => {
  const cache = new InMemoryCache();

  const link = new HttpLink({
    uri: HOST,
    useGETForQueries: true,
  });

  const persistor = new CachePersistor({
    cache,
    storage: new MMKVStorageWrapper(new MMKVStorage.Loader().initialize()),
    debug: __DEV__,
    trigger: 'write',
  });

  await persistor.restore();

  const client = new ApolloClient({
    link,
    cache,
    queryDeduplication: false,
    defaultOptions: {
      watchQuery: {
        fetchPolicy: 'cache-and-network',
      },
    },
  });

  setClient(client);
  setPersistor(persistor);
};
