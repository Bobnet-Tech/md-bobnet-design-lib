import React, { useState } from 'react';
import { Text, TextInputProps, View } from 'react-native';
import styles from './styles';
import ShowPass from '../../../Assets/ShowPass';
import HidePass from '../../../Assets/HidePass';
import PasswordIcon from '../../../Assets/PasswordIcon';
import PassedIcon from '../../../Assets/PassedIcon';
import ErrorIcon from '../../../Assets/ErrorIcon';
import { TextInput } from 'react-native-paper';
import { Colors } from '../../../Theme';

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
  const [secureTextEntry, setSecureTextEntry] = useState(true);
  return (
    <>
      <View style={props.style}>
        <TextInput
          staticLabel={props.staticLabel}
          label={props.label}
          outlineStyle={styles.container}
          underlineColor={Colors.gray}
          activeUnderlineColor={Colors.gray}
          underlineStyle={styles.underlineBar}
          secureTextEntry={secureTextEntry}
          left={
            <TextInput.Icon
            icon={() => {
              return <PasswordIcon />
            }}
            style={props.passwordIcon ? props.passwordIcon : { marginRight: 15, marginTop: 10 }} />
          }
          right={
            <TextInput.Icon
              icon={!secureTextEntry ? "eye" : "eye-off"}
              onPress={() => {
                setSecureTextEntry(!secureTextEntry);
                return false;
              }}
              style={{marginRight: !props.errorCheck ? 70 : 0}}
            />
          }
          //@ts-ignore
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
