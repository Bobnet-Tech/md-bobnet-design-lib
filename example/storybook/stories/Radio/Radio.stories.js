/* eslint-disable react-native/no-inline-styles */
import { storiesOf } from '@storybook/react-native';
import React from 'react';
import CenterView from '../CenterView';
import { CustomRadio } from 'react-native-bob-design';
import { withKnobs } from '@storybook/addon-ondevice-knobs';
import { View } from 'react-native';

storiesOf('Radios', module)
  .addDecorator(withKnobs)
  .addDecorator((getStory) => <CenterView>{getStory()}</CenterView>)
  .add('All', () =>
    React.createElement(() => {
      return (
        <View>
          <CustomRadio
            onToggle={() => {}}
            disabled={false}
            label={'Custom Fill Color Checked'}
            fillColor={'red'}
            checked={true}
          />
          <CustomRadio
            onToggle={() => {}}
            disabled={false}
            label={'Custom Fill Color Unchecked'}
            fillColor={'red'}
            labelStyles={{ color: 'red' }}
            checked={false}
          />
          <CustomRadio
            onToggle={() => {}}
            disabled={false}
            label={'Checked and not disabled'}
            checked={true}
          />
          <CustomRadio
            onToggle={() => {}}
            disabled={false}
            label={'Unchecked and not disabled'}
            checked={false}
          />
          <CustomRadio
            onToggle={() => {}}
            disabled={true}
            label={'Checked and disabled'}
            checked={true}
          />
          <CustomRadio
            onToggle={() => {}}
            disabled={true}
            label={'Unchecked and disabled'}
            checked={false}
          />
        </View>
      );
    })
  );
