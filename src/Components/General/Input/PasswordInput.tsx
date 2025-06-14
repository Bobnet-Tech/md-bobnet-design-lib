import React from 'react';
import { Text, TextInputProps, View } from 'react-native';
import { FloatingLabelInput } from 'react-native-floating-label-input';
import styles from './styles';
import ShowPass from '../../../Assets/ShowPass';
import HidePass from '../../../Assets/HidePass';
import PasswordIcon from '../../../Assets/PasswordIcon';
import PassedIcon from '../../../Assets/PassedIcon';
import ErrorIcon from '../../../Assets/ErrorIcon';

interface Props {
  label?: any;
  onChangeText: any;
  value: string | undefined;
  staticLabel?: boolean;
  style?: any;
  error?: string | undefined | null;
  customShowPassword: any;
  customHidePassword: any;
  errorCheck: boolean;
  labelStylesExternal: any;
  passwordIcon: any;
}

const PasswordInput = (props: Props & TextInputProps) => {
  let labelStyles = {
    ...styles.labelStyles,
    ...props.labelStylesExternal,
    ...(props.staticLabel ? { paddingTop: 10 } : {}),
  };
  return (
    <>
      <View style={props.style}>
        <FloatingLabelInput
          staticLabel={props.staticLabel}
          label={props.label}
          labelStyles={labelStyles}
          containerStyles={styles.container}
          isPassword
          leftComponent={
            <PasswordIcon
              style={
                props.passwordIcon ? props.passwordIcon : { marginRight: 5 }
              }
            />
          }
          customShowPasswordComponent={
            <View
              accessibilityLabel="toggle-show-password"
              style={{
                marginRight: props.errorCheck ? 30 : 0,
              }}
            >
              {props.customShowPassword}
            </View>
          }
          customHidePasswordComponent={
            <View
              accessibilityLabel="toggle-hide-password"
              style={{
                marginRight: props.errorCheck ? 30 : 0,
              }}
            >
              {props.customHidePassword}
            </View>
          }
          {...props}
        />
        {props.errorCheck &&
          (props.error ? (
            <>
              <ErrorIcon style={styles.rightIconPhone} />
              <View style={styles.phoneNumberBorderError} />
            </>
          ) : (
            <>
              <PassedIcon style={styles.rightIconPhone} />
              <View style={styles.phoneNumberBorderPassed} />
            </>
          ))}
      </View>
      <View>
        {props.error && <Text style={styles.error}>{props.error}</Text>}
      </View>
    </>
  );
};

PasswordInput.defaultProps = {
  label: '',
  staticLabel: false,
  error: null,
  style: undefined,
  customShowPassword: <HidePass />,
  customHidePassword: <ShowPass />,
  errorCheck: false,
};

export default PasswordInput;
