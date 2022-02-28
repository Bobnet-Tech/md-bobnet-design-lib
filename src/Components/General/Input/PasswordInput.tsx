import React from 'react';
import { Text, TextInputProps, View } from 'react-native';
import { FloatingLabelInput } from 'react-native-floating-label-input';
import Icon from 'react-native-vector-icons/FontAwesome';
import styles from './styles';

interface Props {
  label?: any;
  onChangeText: any;
  value: string | undefined;
  staticLabel?: boolean;
  style?: any;
  error?: string | undefined | null;
}

const PasswordInput = (props: Props & TextInputProps) => {
  let labelStyles = {
    ...styles.labelStyles,
    ...(props.staticLabel ? { paddingTop: 10 } : {}),
  };
  return (
    <View style={props.style}>
      <FloatingLabelInput
        staticLabel={props.staticLabel}
        label={props.label}
        labelStyles={labelStyles}
        containerStyles={styles.container}
        isPassword
        leftComponent={<Icon name="lock" style={styles.leftIcon} />}
        customShowPasswordComponent={<Text>Show</Text>}
        customHidePasswordComponent={<Text>Hide</Text>}
        {...props}
      />
      {props.error && <Text style={styles.error}>{props.error}</Text>}
    </View>
  );
};

PasswordInput.defaultProps = {
  label: '',
  staticLabel: true,
  error: null,
  style: undefined,
};

export default PasswordInput;
