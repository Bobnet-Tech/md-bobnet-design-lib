import React, { useState } from 'react';
import { Text, TextInputProps, View } from 'react-native';
import PhoneInput from 'react-native-phone-input';
import { FloatingLabelInput } from 'react-native-floating-label-input';
import styles from './styles';
import PassedIcon from '../../../Assets/PassedIcon';
import ErrorIcon from '../../../Assets/ErrorIcon';
import PhoneIcon from '../../../Assets/PhoneIcon';
import PhoneArrowIcon from '../../../Assets/PhoneArrow';

interface Props {
  label?: any;
  onChangeText: any;
  value: string | undefined;
  staticLabel?: boolean;
  error?: string | undefined | null;
  textComponent?: any;
  errorCheck: boolean;
  labelStylesExternal: any;
  phoneIcon: any;
}

const countries = [
  {
    name: 'Romania (România)',
    iso2: 'ro',
    dialCode: '40',
    priority: 0,
    areaCodes: null,
  },
  {
    name: 'Republica Moldova',
    iso2: 'mo',
    dialCode: '373',
    priority: 1,
    areaCodes: null,
  },
];

const PhoneNumberInput = (props: Props & TextInputProps) => {
  let labelStyles = {
    ...styles.labelStyles,
    ...props.labelStylesExternal,
    ...(props.staticLabel ? { paddingTop: 10 } : {}),
  };
  const [isFocused, setIsFocused] = useState(false);
  const [dialCode, setDialCode] = useState('40')

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
                <View style={styles.dialCode}>
                <PhoneIcon
                  style={props.phoneIcon ? props.phoneIcon : { marginLeft: 10 }}
                />
                {isFocused && <>
                  <Text style={styles.customFlagText}>+{dialCode}</Text>
                  <PhoneArrowIcon width={10} height={10} style={{marginLeft: 5}} /></>
                }</View>

              </View>
            );
          }}
          textComponent={FloatingLabelInput}
          allowZeroAfterCountryCode={true}
          autoFormat={true}
          offset={-1}
          countriesList={countries}
          flagStyle={styles.flag}
          onSelectCountry={(country) => setDialCode(countries.find((c) => c.iso2 === country).dialCode)}
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
