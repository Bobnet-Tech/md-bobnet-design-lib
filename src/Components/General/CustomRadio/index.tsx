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
  disabled: boolean;
  onToggle: any;
  label: string;
  containerStyles?: StyleProp<ViewStyle>;
}
const CustomRadio = ({
  checked,
  disabled,
  onToggle,
  label,
  containerStyles,
}: Props) => {
  return (
    <View style={containerStyles}>
      <TouchableOpacity
        disabled={disabled}
        style={[styles.button]}
        onPress={onToggle}
      >
        <Ionicons
          name={checked ? 'md-radio-button-on' : 'md-radio-button-off'}
          size={23}
          color={disabled ? Colors.disabled : Colors.secondary}
        />
        <Text style={[styles.defaultText, disabled ? styles.disabledText : {}]}>
          {label}
        </Text>
      </TouchableOpacity>
    </View>
  );
};
export default CustomRadio;
