import { withKnobs } from '@storybook/addon-ondevice-knobs';
import { storiesOf } from '@storybook/react-native';
import React, { useState } from 'react';
import { Text, View } from 'react-native';
import { CodeScanner, Button, CodeScannerView } from 'react-native-bob-design';
import { heightPercentageToDP } from 'react-native-responsive-screen';
import { BarcodeFormat } from 'vision-camera-code-scanner';

storiesOf('CodeScanner', module)
  .addDecorator(withKnobs)
  .add('As Modal', () =>
    React.createElement(() => {
      const [openCamera, setOpenCamera] = useState(false);

      const openCameraModal = () => {
        console.log('openCameraModal');
        setOpenCamera(true);
      };

      const closeCameraModal = () => {
        setOpenCamera(false);
      };
      const onScan = (data) => {
        console.log('onScan', data);
      };

      return (
        <View style={{ flex: 1, justifyContent: 'center' }}>
          <Button
            type="primary"
            text="Open Camera"
            style={{ margin: 10 }}
            onPress={openCameraModal}
          />
          <CodeScanner
            visible={openCamera}
            onScan={onScan}
            onClose={closeCameraModal}
            closeOnScan
            CustomInfo={() => (
              <Text
                style={{
                  backgroundColor: 'white',
                  position: 'absolute',
                  top: '50%',
                }}
              >
                Custom Info
              </Text>
            )}
            codeTypes={[BarcodeFormat.ALL_FORMATS]}
          />
        </View>
      );
    })
  )
  .add('As View', () =>
    React.createElement(() => {
      const onScan = (data) => {
        console.log('onScan', data);
      };

      return (
        <View style={{ flex: 1, justifyContent: 'center' }}>
          <CodeScannerView
            onScan={onScan}
            closeOnScan
            codeTypes={[BarcodeFormat.ALL_FORMATS]}
            containerStyles={{ height: 330 }}
          />
        </View>
      );
    })
  );
