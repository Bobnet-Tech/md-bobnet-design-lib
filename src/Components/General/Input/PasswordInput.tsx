import React from 'react';
import { Text, TextInputProps, View } from 'react-native';
import { FloatingLabelInput } from 'react-native-floating-label-input';
import styles from './styles';
import ShowPass from '../../../Assets/ShowPass';
import HidePass from '../../../Assets/HidePass';
import PasswordIcon from '../../../Assets/PasswordIcon';

interface Props {
  label?: any;
  onChangeText: any;
  value: string | undefined;
  staticLabel?: boolean;
  style?: any;
  error?: string | undefined | null;
  customShowPassword: any;
  customHidePassword: any;
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
        leftComponent={<PasswordIcon />}
        customShowPasswordComponent={props.customShowPassword}
        customHidePasswordComponent={props.customHidePassword}
        {...props}
      />
      {props.error && <Text style={styles.error}>{props.error}</Text>}
    </View>
  );
};

PasswordInput.defaultProps = {
  label: '',
  staticLabel: false,
  error: null,
  style: undefined,
  customShowPassword: <HidePass />,
  customHidePassword: <ShowPass />,
};

export default PasswordInput;
