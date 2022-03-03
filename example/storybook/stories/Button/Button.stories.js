/* eslint-disable react-native/no-inline-styles */
import { storiesOf } from '@storybook/react-native';
import React from 'react';
import CenterView from '../CenterView';
import { Button } from 'react-native-bob-design';
import { StyleSheet, View } from 'react-native';
import { withKnobs } from '@storybook/addon-ondevice-knobs';

const styles = StyleSheet.create({
  separator: {
    marginVertical: 10,
  },
});
storiesOf('Buttons', module)
  .addDecorator(withKnobs)
  .addDecorator((getStory) => <CenterView>{getStory()}</CenterView>)
  .add('Types', () =>
    React.createElement(() => {
      return (
        <View>
          <Button type="primary" text="Primary" />
          <View style={styles.separator} />
          <Button type="primary" text="Primary" outlined />
          <View style={styles.separator} />
          <Button type="link" text="Link" />
          <View style={styles.separator} />
          <Button type="secondary" text="Primary" outlined />
          <View style={styles.separator} />
          <Button type="secondary" text="Secondary" />
        </View>
      );
    })
  )
  .add('Loading', () =>
    React.createElement(() => {
      return (
        <View>
          <Button type="primary" text="Primary" isLoading={true} />
          <View style={styles.separator} />
          <Button type="primary" text="Primary" outlined isLoading={true} />
          <View style={styles.separator} />
          <Button type="link" text="Link" isLoading={true} />
          <View style={styles.separator} />
          <Button type="secondary" text="Primary" outlined isLoading={true} />
          <View style={styles.separator} />
          <Button type="secondary" text="Secondary" isLoading={true} />
        </View>
      );
    })
  );
