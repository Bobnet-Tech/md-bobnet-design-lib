import React from 'react';
import { ActivityIndicator } from 'react-native-paper';
interface Props {
  color: string;
}

const Loading = ({ color }: Props) => {
  return <ActivityIndicator color={color} size={19} />;
};

export default Loading;
