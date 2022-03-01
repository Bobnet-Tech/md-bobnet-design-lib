/* eslint-disable react/require-default-props */
import { Colors } from '../../../Theme';
import React from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  StyleProp,
  ViewStyle,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import styles from './styles';
interface Props {
  checked: boolean;
  disabled: false;
  onToggle: any;
  label: string;
  fillColor?: string;
  containerStyles?: StyleProp<ViewStyle>;
  labelStyles?: any;
}
const CustomCheckbox = ({
  checked,
  disabled,
  labelStyles,
  onToggle,
  label,
  fillColor,
  containerStyles,
}: Props) => {
  return (
    <View style={containerStyles}>
      <TouchableOpacity
        disabled={disabled}
        style={styles.button}
        onPress={onToggle}
      >
        <Ionicons
          name={checked ? 'md-checkbox' : 'md-square-outline'}
          size={23}
          color={fillColor}
        />
        <Text style={[styles.defaultText, labelStyles]} numberOfLines={3}>
          {label}
        </Text>
      </TouchableOpacity>
    </View>
  );
};
CustomCheckbox.defaultProps = {
  fillColor: Colors.secondary,
};
export default CustomCheckbox;
