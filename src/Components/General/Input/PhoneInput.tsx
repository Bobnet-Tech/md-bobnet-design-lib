import React, { useState } from 'react';
import { Text, TextInputProps, View } from 'react-native';
import PhoneInput from 'react-native-phone-input';
import styles from './styles';
import PassedIcon from '../../../Assets/PassedIcon';
import ErrorIcon from '../../../Assets/ErrorIcon';
import PhoneIcon from '../../../Assets/PhoneIcon';
import PhoneArrowIcon from '../../../Assets/PhoneArrow';
import { TextInput } from 'react-native-paper';

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
  onSelectCountry: any;
  dialCode: string;
}

const countries = [
  {
    name: 'Romania (România)',
    iso2: 'ro',
    dialCode: '+40',
    priority: 0,
    areaCodes: null,
  },
  {
    name: 'Republica Moldova',
    iso2: 'md',
    dialCode: '+373',
    priority: 1,
    areaCodes: null,
  },
];

const PhoneNumberInput = (props: Props & TextInputProps) => {
  const hasError = !!props.error;
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
                <PhoneIcon
                  style={props.phoneIcon ? props.phoneIcon : { marginLeft: 10 }}
                />
                {isFocused && <View style={styles.dialCode}>
                  <Text style={styles.customFlagText}>{props.dialCode}</Text>
                  <PhoneArrowIcon width={10} height={10} style={{marginLeft: 5}} />
                  </View>
                }
              </View>
            );
          }}
          textComponent={TextInput}
          allowZeroAfterCountryCode={true}
          autoFormat={true}
          offset={-1}
          countriesList={countries}
          flagStyle={styles.flag}
          onSelectCountry={(country) => props.onSelectCountry(country)}
          textProps={{
            //@ts-ignore
            error: hasError,
            label: props.label,
            staticLabel: props.staticLabel,
            keyboardType: 'phone-pad',
            autoCapitalize: 'none',
            returnKeyType: 'next',
            maxLength: 10,
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
