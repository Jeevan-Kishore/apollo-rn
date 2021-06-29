import React from 'react';
import {Button, Text} from 'react-native';
import {useQuery} from '@apollo/client';
import {HOME_CALL} from '../constants';

export const CollectionViewer = props => {
  const {data, loading, refetch} = useQuery(HOME_CALL);
  if (!data || loading) {
    return <Text>Loading</Text>;
  }
  return (
    <>
      <Button title={'Refresh'} onPress={() => refetch()} />
      {data.getHome.items.map(({name}, index) => (
        <Text style={{margin: 10}} key={`${name}-${index}`}>
          {name}
        </Text>
      ))}
    </>
  );
};
