import React, { useMemo } from 'react';
import {
  View,
  TouchableOpacity,
  StyleProp,
  ViewStyle,
  Text,
  TextStyle,
} from 'react-native';
import Loading from './Loading';
import styles from './styles';
interface Props {
  onPress: any;
  type: 'primary' | 'secondary' | 'link';
  bordered?: boolean;
  text: string;
  isLoading?: boolean;
  outlined?: boolean;
  style?: StyleProp<ViewStyle>;
  textStyle?: StyleProp<TextStyle>;
  testID?: any;
}
const Button = ({
  onPress,
  type = 'primary',
  text = '',
  isLoading,
  style = {},
  textStyle = {},
  outlined = false,
  testID,
}: Props) => {
  let currentStyles = useMemo(() => {
    let buttonKey = '';
    let textKey = '';
    switch (type) {
      case 'primary':
      case 'secondary':
        buttonKey = outlined ? `${type}Outlined` : type;
        textKey = outlined ? `${type}TextOutlined` : `${type}Text`;
        break;
      case 'link':
        buttonKey = 'link';
        textKey = 'linkText';
        break;
    }
    return {
      button: styles[buttonKey],
      text: styles[textKey],
    };
  }, [type, outlined]);
  return (
    <TouchableOpacity
      testID={testID}
      onPress={onPress}
      activeOpacity={0.7}
      disabled={isLoading}
    >
      <View style={[styles.button, currentStyles.button, style]}>
        {isLoading && <Loading outlined={outlined} />}
        {!isLoading && (
          <Text style={[styles.text, currentStyles.text, textStyle]}>
            {text}
          </Text>
        )}
      </View>
    </TouchableOpacity>
  );
};

export default Button;
