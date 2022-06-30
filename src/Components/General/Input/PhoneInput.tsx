import React, { useState } from 'react';
import { Text, TextInputProps, View } from 'react-native';
import PhoneInput from 'react-native-phone-input';
import { FloatingLabelInput } from 'react-native-floating-label-input';
import styles from './styles';
import PassedIcon from '../../../Assets/PassedIcon';
import ErrorIcon from '../../../Assets/ErrorIcon';
import PhoneIcon from '../../../Assets/PhoneIcon';

interface Props {
  label?: any;
  onChangeText: any;
  value: string | undefined;
  staticLabel?: boolean;
  error?: string | undefined | null;
  textComponent?: any;
  errorCheck: boolean;
}

const countries = [
  {
    name: 'Romania (România)',
    iso2: 'ro',
    dialCode: '40',
    priority: 0,
    areaCodes: null,
  },
];

const PhoneNumberInput = (props: Props & TextInputProps) => {
  let labelStyles = {
    ...styles.labelStyles,
    ...(props.staticLabel ? { paddingTop: 10 } : {}),
  };
  const [isFocused, setIsFocused] = useState(false);
  const onInputFocus = () => {
    setIsFocused(true);
  };
  return (
    <>
      <View style={props.style}>
        <PhoneInput
          initialCountry={'ro'}
          {...props}
          renderFlag={({}) => {
            return (
              <View
                style={
                  (props.errorCheck &&
                    props.error &&
                    styles.customFlagTouched) ||
                  styles.customFlag
                }
              >
                <PhoneIcon style={{ marginLeft: 10 }} />
                {isFocused && <Text style={styles.customFlagText}>+40</Text>}
              </View>
            );
          }}
          textComponent={FloatingLabelInput}
          allowZeroAfterCountryCode={true}
          autoFormat={true}
          offset={-1}
          countriesList={countries}
          flagStyle={styles.flag}
          textProps={{
            label: props.label,
            staticLabel: props.staticLabel,
            labelStyles: labelStyles,
            keyboardType: 'phone-pad',
            autoCapitalize: 'none',
            returnKeyType: 'next',
            maxLength: 10,
            containerStyles: styles.container,
            animationDuration: 300,
            onFocus: onInputFocus,
            ...props,
          }}
          textStyle={styles.container}
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

PhoneNumberInput.defaultProps = {
  error: null,
  errorCheck: false,
};

export default PhoneNumberInput;
