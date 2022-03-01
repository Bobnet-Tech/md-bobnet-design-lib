/* eslint-disable react/require-default-props */
import React from 'react';
import { Text, TextInputProps, View } from 'react-native';
import PhoneInput from 'react-native-phone-input';
import { FloatingLabelInput } from 'react-native-floating-label-input';
import styles from './styles';

interface Props {
  label?: any;
  onChangeText: any;
  value: string | undefined;
  staticLabel?: boolean;
  error?: string | undefined | null;
  textComponent?: any;
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
  return (
    <View style={props.style}>
      <PhoneInput
        initialCountry={'ro'}
        {...props}
        textComponent={FloatingLabelInput}
        allowZeroAfterCountryCode={false}
        autoFormat={true}
        countriesList={countries}
        flagStyle={styles.flag}
        textProps={{
          label: props.label,
          staticLabel: props.staticLabel,
          labelStyles: labelStyles,
          keyboardType: 'phone-pad',
          autoCapitalize: 'none',
          returnKeyType: 'next',
          maxLength: 9,
          containerStyles: styles.container,
          animationDuration: 300,
          ...props,
        }}
        textStyle={styles.container}
      />
      {props.error && <Text style={styles.error}>{props.error}</Text>}
    </View>
  );
};

PhoneNumberInput.defaultProps = {
  error: null,
};

export default PhoneNumberInput;
