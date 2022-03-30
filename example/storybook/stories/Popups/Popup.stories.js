/* eslint-disable react-native/no-inline-styles */
import { storiesOf } from '@storybook/react-native';
import React from 'react';
import { PopupRoot, Button, Popup } from 'react-native-bob-design';
import { withKnobs } from '@storybook/addon-ondevice-knobs';
import { View } from 'react-native';

storiesOf('Popups', module)
  .addDecorator(withKnobs)
  .add('All', () =>
    React.createElement(() => {
      const showPopup = (type) => {
        Popup.show({
          type: type,
          title: 'Upload complete',
          button: true,
          textBody: 'Congrats! Your upload successfully done',
          buttonText: 'OK',
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
              onPress={() => showPopup('Success')}
            />
            <Button
              type="primary"
              text="Error"
              style={{ margin: 10 }}
              onPress={() => showPopup('Danger')}
            />
            <Button
              type="primary"
              text="Warning"
              style={{ margin: 10 }}
              onPress={() => showPopup('Warning')}
            />
            <Button
              type="primary"
              text="SadFace"
              style={{ margin: 10 }}
              onPress={() => showPopup('SadFace')}
            />
            <Button
              type="primary"
              text="HappyFace"
              style={{ margin: 10 }}
              onPress={() => showPopup('HappyFace')}
            />
            <Button
              type="primary"
              text="NeutralFace"
              style={{ margin: 10 }}
              onPress={() => showPopup('NeutralFace')}
            />
          </View>
        </PopupRoot>
      );
    })
  );
