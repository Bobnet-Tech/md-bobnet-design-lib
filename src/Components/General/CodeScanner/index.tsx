/* eslint-disable react-hooks/exhaustive-deps */
// import QrTarget from '@/Assets/Svgs/QrTarget';
import React, { useEffect } from 'react';
import { StyleSheet, TouchableOpacity, Vibration, View } from 'react-native';
import { useCameraDevices } from 'react-native-vision-camera';
import { Camera } from 'react-native-vision-camera';

import Modal from 'react-native-modal';
import styles from './styles';
import { BarcodeFormat, useScanBarcodes } from 'vision-camera-code-scanner';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

interface Props {
  onScan: (data: string) => void;
  onClose: () => void;
  scanFrequency?: number;
  CustomInfo?: React.ReactNode;
  showQrTarget?: boolean;
  codeTypes?: string[];
  closeOnScan?: boolean;
}
const CodeScanner = ({
  visible,
  CustomInfo,
  onScan,
  codeTypes,
  onClose,
  scanFrequency,
  closeOnScan,
}: any) => {
  const [hasPermission, setHasPermission] = React.useState(false);
  const devices = useCameraDevices();
  const device = devices.back;
  const [frameProcessor, barcodes] = useScanBarcodes(codeTypes);

  useEffect(() => {
    if (barcodes?.length) {
      Vibration.vibrate([0, 200, 0]);
      onScan(barcodes[0]);
      if (closeOnScan) {
        onClose();
      }
    }
  }, [barcodes]);

  useEffect(() => {
    (async () => {
      const status = await Camera.requestCameraPermission();

      setHasPermission(status === 'authorized');
    })();
  }, []);

  const isReady = device != null && hasPermission && visible;

  if (!isReady) {
    return null;
  }

  return (
    <Modal isVisible={visible} style={{ margin: 0 }}>
      <View style={styles.modalContent}>
        <Camera
          style={StyleSheet.absoluteFill}
          device={device}
          isActive={isReady}
          frameProcessor={frameProcessor}
          frameProcessorFps={scanFrequency}
        />
        <CustomInfo />
        <TouchableOpacity style={styles.closeButton} onPress={onClose}>
          <FontAwesome name="close" color="white" size={20} />
        </TouchableOpacity>
      </View>
    </Modal>
  );
};
CodeScanner.defaultProps = {
  scanFrequency: 1,
  showQrTarget: true,
  codeTypes: [BarcodeFormat.QR_CODE],
  closeOnScan: false,
};
export default CodeScanner;
