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
  fillColor: string;
  labelStyles: StyleProp<ViewStyle>;
  containerStyles?: StyleProp<ViewStyle>;
  accessibilityLabel: string;
}
const CustomRadio = ({
  checked,
  disabled,
  onToggle,
  fillColor,
  labelStyles,
  label,
  containerStyles,
  accessibilityLabel,
}: Props) => {
  return (
    <View style={containerStyles}>
      <TouchableOpacity
        disabled={disabled}
        style={[styles.button]}
        onPress={onToggle}
        accessibilityLabel={accessibilityLabel}
      >
        <Ionicons
          name={checked ? 'md-radio-button-on' : 'md-radio-button-off'}
          size={23}
          color={disabled ? Colors.disabled : fillColor}
        />
        <Text
          style={[
            styles.defaultText,
            disabled ? styles.disabledText : {},
            labelStyles,
          ]}
        >
          {label}
        </Text>
      </TouchableOpacity>
    </View>
  );
};
CustomRadio.defaultProps = {
  fillColor: Colors.secondary,
};
export default CustomRadio;
