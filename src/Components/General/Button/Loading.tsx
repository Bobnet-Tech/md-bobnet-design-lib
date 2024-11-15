import React from 'react';
import { ActivityIndicator } from 'react-native-paper';
interface Props {
  outlined: boolean;
}

const Loading = ({ outlined }: Props) => {
  return <ActivityIndicator color={outlined ? 'black' : 'white'} size={19} />;
};

export default Loading;
