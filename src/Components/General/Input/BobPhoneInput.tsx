import React, { useState } from 'react';
import { Image, Text, TextInputProps, View } from 'react-native';
import PhoneInput from 'react-native-phone-input';
import styles from './styles';
import PassedIcon from '../../../Assets/PassedIcon';
import ErrorIcon from '../../../Assets/ErrorIcon';
import { TextInput } from 'react-native-paper';
import { Colors } from '../../../Theme';
import BobPhoneArrowIcon from '../../../Assets/BobPhoneArrowIcon';

interface Props {
  label?: any;
  onChangeText: any;
  value: string | undefined;
  staticLabel?: boolean;
  error?: string | undefined | null;
  textComponent?: any;
  customLeftComponent?: any;
  errorCheck: boolean;
  labelStylesExternal: any;
  phoneIcon: any;
  onSelectCountry: any;
  dialCode: string;
  leftIcon?: any;
  leftIconStyle?: any;
  leftIconColor?: string;
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

const BobPhoneNumberInput = (props: Props & TextInputProps) => {
    const hasError = !!props.error;
    const [isFocused, setIsFocused] = useState(false);

    const dynamicStyle = {
        borderColor: props.errorCheck
          ? (props.error ? Colors.warn : Colors.green)
          : isFocused
          ? Colors.darkBlue
          : Colors.lightGray,
      };
  
    const onInputFocus = () => {
      setIsFocused(true);
    };
    const onInputBlur = () => {
        setIsFocused(false);
    }
  
    return (
      <>
        <View style={props.style}>
          <PhoneInput
            initialCountry={'ro'}
            {...props}
            renderFlag={(flag) => {
              return (
                <View
                  style={
                    (props.errorCheck &&
                      props.error &&
                      styles.customFlagTouched) ||
                    styles.customPhoneFlag
                  }
                >
                    <Image source={flag.imageSource} style={{width: 20, height: 20, borderRadius: 20}} />
                    <Text style={styles.customFlagText}>{props.dialCode}</Text>
                    <BobPhoneArrowIcon width={10} height={10} style={{marginLeft: 5}} />
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
              onBlur: onInputBlur,
              onFocus: onInputFocus,
              dense: true,
              textColor: Colors.darkBlue,
              activeUnderlineColor: Colors.darkGrey,
              placeholderTextColor: Colors.lightGray,
              
              underlineStyle: styles.underlineBar,
              style: [styles.bobInputContainer, dynamicStyle],
              left: <TextInput.Icon
              icon={() => props.customLeftComponent}
              style={props.leftIconStyle}
            />,
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

BobPhoneNumberInput.defaultProps = {
  error: null,
  errorCheck: false,
};

export default BobPhoneNumberInput;
