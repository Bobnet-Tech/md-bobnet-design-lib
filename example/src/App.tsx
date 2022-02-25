import * as React from 'react';

import { StyleSheet, View } from 'react-native';
import { InformationBox } from 'react-native-bob-design';
export default function App() {
  return (
    <View style={styles.container}>
      <InformationBox
        text={'Text 1'}
        iconType={'AntDesign'}
        iconName={'clockcircleo'}
        iconSize={32}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  box: {
    width: 60,
    height: 60,
    marginVertical: 20,
  },
});
