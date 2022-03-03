import React from 'react';

import LottieView from 'lottie-react-native';
import styles from './styles';
import { View } from 'react-native';
interface Props {
  outlined: boolean;
}

const Loading = ({ outlined }: Props) => {
  let animation = outlined ? require('./black.json') : require('./white.json');
  return (
    <View style={styles.loadingContainer}>
      <LottieView source={animation} autoPlay loop />
    </View>
  );
};

export default Loading;
