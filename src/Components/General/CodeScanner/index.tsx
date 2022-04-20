/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react';
import { StyleSheet, TouchableOpacity, Vibration, View } from 'react-native';
// @ts-ignore
import { useCameraDevices } from 'react-native-vision-camera';
// @ts-ignore
import { Camera } from 'react-native-vision-camera';
import Modal from 'react-native-modal';
import styles from './styles';
// @ts-ignore
import { Barcode, useScanBarcodes } from 'vision-camera-code-scanner';
// @ts-ignore

import { BarcodeFormat } from 'vision-camera-code-scanner';

import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { widthPercentageToDP } from 'react-native-responsive-screen';
import QrTarget from '../QrTarget';

interface Props {
  onScan: (data: Barcode) => void;
  onClose: () => void;
  visible: boolean;
  scanFrequency?: number;
  CustomInfo?: any;
  showQrTarget?: boolean;
  codeTypes?: BarcodeFormat[];
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
        {!!CustomInfo && <CustomInfo />}
        <TouchableOpacity style={styles.closeButton} onPress={onClose}>
          <FontAwesome name="close" color="white" size={20} />
        </TouchableOpacity>
        {showQrTarget && (
          <QrTarget
            style={styles.qrTarget}
            color={'rgba(0,0,0,0.6)'}
            width={widthPercentageToDP(65)}
            height={widthPercentageToDP(65)}
          />
        )}
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
