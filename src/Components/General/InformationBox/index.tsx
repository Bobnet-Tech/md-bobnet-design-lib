import React from 'react';
import { View, Text, Image } from 'react-native';
import styles from './styles';
import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Feather from 'react-native-vector-icons/Feather';
import Entypo from 'react-native-vector-icons/Entypo';
import { Colors } from '../../../Theme';

interface Props {
  text: string;
  iconType: string;
  iconName: any;
  iconSize: number;
  child?: any;
}
const InformationBox = ({
  text,
  iconType,
  iconName,
  iconSize,
  child,
}: Props) => {
  let SelectedIconType: any =
    iconType === 'MaterialCommunityIcons'
      ? MaterialCommunityIcons
      : iconType === 'FontAwesome'
      ? FontAwesome
      : iconType === 'AntDesign'
      ? AntDesign
      : iconType === 'MaterialIcons'
      ? MaterialIcons
      : iconType === 'FontAwesome5'
      ? FontAwesome5
      : iconType === 'Feather'
      ? Feather
      : iconType === 'Entypo'
      ? Entypo
      : null;

  return (
    <View style={styles.informationContainer}>
      <View style={styles.informationIconContainer}>
        {iconType === 'image' ? (
          <Image
            source={iconName}
            style={{ width: iconSize, height: iconSize }}
          />
        ) : (
          <SelectedIconType
            name={iconName}
            size={iconSize}
            color={Colors.secondary}
          />
        )}
      </View>
      {!!text && (
        <View style={styles.informationMessageContainer}>
          <Text style={styles.text}>{text}</Text>
        </View>
      )}
      {!!child && (
        <View style={styles.informationMessageContainer}>{child}</View>
      )}
    </View>
  );
};
export default InformationBox;
