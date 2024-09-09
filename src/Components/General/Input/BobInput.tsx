import React, { useState } from 'react';
import { Text, TextInputProps, View } from 'react-native';
import { TextInput } from 'react-native-paper';
import { Colors } from '../../../Theme';
import styles from './styles';

interface Props {
  label?: any;
  leftIcon?: any;
  leftIconColor?: string;
  staticLabel?: boolean;
  error?: string | undefined | null;
  hint?: string;
  customLeftComponent: any;
  labelStylesExternal?: any;
  isEditable?: boolean;
  underlineColor?: string;
  leftIconStyle?: any;
  activeUnderlineColor?: string;
  placeholder?: string;
  errorCheck: boolean;
  successMessage?: string;
  fontFamily?: string;
}

const BobInput = (props: Props & TextInputProps) => {
  const hasError = !!props.error;
  const [focus, setFocus] = useState(false);

  return (
    <View style={props.style}>
      <TextInput
        staticLabel={props.staticLabel}
        //@ts-ignore
        error={hasError}
        onFocus={() => setFocus(!focus)}
        onBlur={() => setFocus(!focus)}
        activeUnderlineColor={Colors.darkGrey}
        underlineStyle={styles.underlineBar}
        label={props.label}
        style={[
          styles.bobInputContainer,
          {
            borderColor: props.errorCheck
              ? props.error
                ? Colors.warn
                : Colors.green
              : focus
              ? Colors.blue
              : Colors.neutral,
          },
        ]}
        textColor={Colors.blue}
        dense={true}
        placeholder={props.placeholder}
        placeholderTextColor={Colors.lightGray}
        editable={props.isEditable}
        autoCapitalize={props.autoCapitalize}
        autoCorrect={false}
        hint={props.hint}
        left={
          props.customLeftComponent ? (
            <TextInput.Icon
              icon={() => props.customLeftComponent}
              style={props.leftIconStyle}
            />
          ) : (
            props.leftIcon && (
              <TextInput.Icon
                icon={props.leftIcon}
                style={styles.leftIcon}
                color={props.leftIconColor}
              />
            )
          )
        }
        {...props}
      />
      {props.errorCheck &&
        (props.error ? (
          <Text style={styles.errorMessage}>{props.error}</Text>
        ) : (
          props.successMessage && (
            <Text style={styles.successMessage}>{props.successMessage}</Text>
          )
        ))}
    </View>
  );
};

BobInput.defaultProps = {
  label: '',
  staticLabel: true,
  error: null,
  leftIconColor: 'black',
  errorCheck: false,
  editable: true,
};

export default BobInput;
