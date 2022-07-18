/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react';
import { StyleSheet, Vibration, View } from 'react-native';
// @ts-ignore
import { useCameraDevices } from 'react-native-vision-camera';
// @ts-ignore
import { Camera } from 'react-native-vision-camera';
import styles from './styles';
// @ts-ignore
import { Barcode, useScanBarcodes } from 'vision-camera-code-scanner';
// @ts-ignore

import { BarcodeFormat } from 'vision-camera-code-scanner';

import { widthPercentageToDP } from 'react-native-responsive-screen';
import QrTarget from '../QrTarget';

interface Props {
  onScan: (data: Barcode) => void;
  scanFrequency?: number;
  CustomInfo?: any;
  showQrTarget?: boolean;
  qrTargetColor?: string;
  qrTargetSize?: any;
  closeIconStyles?: any;
  qrTargetStyles?: any;
  closeButtonStyles?: any;
  codeTypes?: BarcodeFormat[];
  containerStyles?: any[];
}
const CodeScannerView = ({
  onScan,
  codeTypes,
  scanFrequency,
  qrTargetColor,
  qrTargetSize,
  qrTargetStyles,
  showQrTarget,
}: Props) => {
  const [hasPermission, setHasPermission] = React.useState(false);
  const devices = useCameraDevices();
  const device = devices.back;
  const [frameProcessor, barcodes] = useScanBarcodes(codeTypes);

  useEffect(() => {
    if (barcodes?.length) {
      Vibration.vibrate([0, 200, 0]);
      onScan(barcodes[0]);
    }
  }, [barcodes]);

  useEffect(() => {
    (async () => {
      const status = await Camera.requestCameraPermission();

      setHasPermission(status === 'authorized');
    })();
  }, []);

  const isReady = device != null && hasPermission;

  if (!isReady) {
    return null;
  }

  return (
    <View style={styles.modalContent}>
      <Camera
        style={StyleSheet.absoluteFill}
        device={device}
        isActive={isReady}
        frameProcessor={frameProcessor}
        frameProcessorFps={scanFrequency}
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
  codeTypes: [BarcodeFormat.QR_CODE],
  qrTargetColor: 'rgba(0,0,0,0.6)',
  qrTargetSize: widthPercentageToDP(65),
  containerStyles: {},
};
export default CodeScannerView;
