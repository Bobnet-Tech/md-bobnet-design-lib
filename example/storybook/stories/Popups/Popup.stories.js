/* eslint-disable react-native/no-inline-styles */
import { storiesOf } from '@storybook/react-native';
import React, { useEffect } from 'react';
import CenterView from '../CenterView';
import { PopupRoot, Button, Popup } from 'react-native-bob-design';
import { withKnobs } from '@storybook/addon-ondevice-knobs';
import { View } from 'react-native';

storiesOf('Popups', module)
  .addDecorator(withKnobs)
  .add('All', () =>
    React.createElement(() => {
      const showWarning = () => {
        Popup.show({
          type: 'Warning',
          title: 'Upload complete',
          button: true,
          textBody: 'Congrats! Your upload successfully done',
          buttonText: 'Ok',
          callback: () => Popup.hide(),
        });
      };
      const showError = () => {
        Popup.show({
          type: 'Danger',
          title: 'Upload complete',
          button: true,
          textBody: 'Congrats! Your upload successfully done',
          buttonText: 'Ok',
          callback: () => Popup.hide(),
        });
      };
      const showSuccess = () => {
        Popup.show({
          type: 'Success',
          title: 'Upload complete',
          button: true,
          textBody: 'Congrats! Your upload successfully done',
          buttonText: 'Ok',
          callback: () => Popup.hide(),
        });
      };
      return (
        <PopupRoot>
          <View style={{ flex: 1, justifyContent: 'center' }}>
            <Button
              type="primary"
              text="Success"
              style={{ margin: 10 }}
              onPress={showSuccess}
            />
            <Button
              type="primary"
              text="Error"
              style={{ margin: 10 }}
              onPress={showError}
            />
            <Button
              type="primary"
              text="Warning"
              style={{ margin: 10 }}
              onPress={showWarning}
            />
          </View>
        </PopupRoot>
      );
    })
  );
