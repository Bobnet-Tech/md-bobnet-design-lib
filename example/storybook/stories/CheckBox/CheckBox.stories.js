/* eslint-disable react-native/no-inline-styles */
import { storiesOf } from '@storybook/react-native';
import React from 'react';
import CenterView from '../CenterView';
import { CustomCheckbox } from 'react-native-bob-design';
import { withKnobs } from '@storybook/addon-ondevice-knobs';
import { View } from 'react-native';

storiesOf('CheckBoxes', module)
  .addDecorator(withKnobs)
  .addDecorator((getStory) => <CenterView>{getStory()}</CenterView>)
  .add('All', () =>
    React.createElement(() => {
      return (
        <View>
          <CustomCheckbox
            onToggle={() => {}}
            disabled={false}
            label={'Custom Fill Color Checked'}
            fillColor={'red'}
            checked={true}
          />
          <CustomCheckbox
            onToggle={() => {}}
            disabled={false}
            label={'Custom Fill Color Unchecked'}
            fillColor={'red'}
            checked={false}
          />
          <CustomCheckbox
            onToggle={() => {}}
            disabled={false}
            label={'Checked and not disabled'}
            checked={true}
          />
          <CustomCheckbox
            onToggle={() => {}}
            disabled={false}
            label={'Unchecked and not disabled'}
            checked={false}
          />
          <CustomCheckbox
            onToggle={() => {}}
            disabled={true}
            label={'Checked and disabled'}
            checked={true}
          />
          <CustomCheckbox
            onToggle={() => {}}
            disabled={true}
            label={'Unchecked and disabled'}
            checked={false}
          />
        </View>
      );
    })
  );
