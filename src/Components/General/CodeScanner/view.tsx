/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react';
import { StyleSheet, View } from 'react-native';
// @ts-ignore
import { useCameraDevice, useCameraDevices } from 'react-native-vision-camera';
// @ts-ignore
import { Camera } from 'react-native-vision-camera';
import styles from './styles';
// @ts-ignore
// import { Barcode, useScanBarcodes } from 'vision-camera-code-scanner';
// // @ts-ignore

// import { BarcodeFormat } from 'vision-camera-code-scanner';

import { widthPercentageToDP } from 'react-native-responsive-screen';
import QrTarget from '../QrTarget';

interface Props {
  onScan: (data: any) => void;
  scanFrequency?: number;
  CustomInfo?: any;
  showQrTarget?: boolean;
  qrTargetColor?: string;
  qrTargetSize?: any;
  closeIconStyles?: any;
  qrTargetStyles?: any;
  closeButtonStyles?: any;
  codeTypes?: any[];
  containerStyles: any;
  isActive: boolean;
}
const CodeScannerView = ({
  qrTargetColor,
  qrTargetSize,
  qrTargetStyles,
  showQrTarget,
  containerStyles,
  isActive,
}: Props) => {
  const [hasPermission, setHasPermission] = React.useState(false);
  const device = useCameraDevice('back')
  // const [frameProcessor, barcodes] = useScanBarcodes(codeTypes, {
  //   checkInverted: true,
  // });

  // useEffect(() => {
  //   if (barcodes?.length) {
  //     Vibration.vibrate([0, 200, 0]);
  //     onScan(barcodes[0]);
  //   }
  // }, [barcodes]);

  useEffect(() => {
    (async () => {
      const status = await Camera.requestCameraPermission();

      setHasPermission(status === 'granted');
    })();
  }, []);

  const isReady = device != null && hasPermission && isActive;

  if (!isReady) {
    return null;
  }
  return (
    <View style={styles.modalContent}>
      <Camera
        style={
          Object.keys(containerStyles).length > 0
            ? containerStyles
            : StyleSheet.absoluteFill
        }
        device={device}
        isActive={isReady}
        // frameProcessor={frameProcessor}
      />
      {showQrTarget && (
        <QrTarget
          style={[styles.qrTarget, qrTargetStyles]}
          color={qrTargetColor}
          width={qrTargetSize}
          height={qrTargetSize}
        />
      )}
    </View>
  );
};
CodeScannerView.defaultProps = {
  scanFrequency: 1,
  showQrTarget: true,
  codeTypes: [],
  qrTargetColor: 'rgba(0,0,0,0.6)',
  qrTargetSize: widthPercentageToDP(65),
};
export default CodeScannerView;
