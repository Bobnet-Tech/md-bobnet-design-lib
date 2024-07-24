import React, { useMemo } from 'react';
import {
  View,
  TouchableOpacity,
  StyleProp,
  ViewStyle,
  Text,
  TextStyle,
  TouchableOpacityProps,
} from 'react-native';
import Loading from './Loading';
import styles from './styles';
import { Colors } from '../../../Theme';
interface Props {
  onPress: any;
  type: 'primary' | 'secondary' | 'link';
  bordered?: boolean;
  text?: string;
  disabled?: boolean;
  isLoading?: boolean;
  outlined?: boolean;
  style?: StyleProp<ViewStyle>;
  textStyle?: StyleProp<TextStyle>;
  testID?: any;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  accessibilityLabel?: string;
}
const Button = ({
  onPress,
  type = 'primary',
  text = '',
  isLoading,
  disabled = false,
  style = {},
  textStyle = {},
  outlined = false,
  testID,
  accessibilityLabel,
  leftIcon,
  rightIcon,
  ...rest
}: Props & TouchableOpacityProps) => {
  let currentStyles = useMemo(() => {
    let buttonKey = '';
    let textKey = '';
    let indicatorKey = '';
    switch (type) {
      case 'primary':
      case 'secondary':
        buttonKey = outlined ? `${type}Outlined` : type;
        textKey = outlined ? `${type}TextOutlined` : `${type}Text`;
        indicatorKey = outlined
          ? type === 'primary'
            ? Colors.black
            : Colors.blue
          : type === 'secondary'
          ? Colors.lightGray
          : Colors.white;
        break;
      case 'link':
        buttonKey = 'link';
        textKey = 'linkText';
        indicatorKey = Colors.blue;
        break;
    }
    return {
      button: styles[buttonKey],
      text: styles[textKey],
      colorIndicator: indicatorKey,
    };
  }, [type, outlined]);
  return (
    <TouchableOpacity
      testID={testID}
      accessibilityLabel={accessibilityLabel}
      onPress={onPress}
      activeOpacity={0.7}
      disabled={disabled || isLoading}
      {...rest}
    >
      <View style={[styles.button, currentStyles.button, style]}>
        {isLoading && <Loading color={currentStyles.colorIndicator} />}
        {!isLoading && (
          <View style={styles.buttonContiner}>
            {leftIcon && leftIcon}
            {text && (
              <Text style={[styles.text, currentStyles.text, textStyle]}>
                {text}
              </Text>
            )}
            {rightIcon && rightIcon}
          </View>
        )}
      </View>
    </TouchableOpacity>
  );
};

export default Button;
