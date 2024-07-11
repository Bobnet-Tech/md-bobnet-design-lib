/* eslint-disable react/require-default-props */
import React from 'react';
import { Text, TextInputProps, View } from 'react-native';
import styles from './styles';
import { TextInput } from 'react-native-paper';

interface Props {
  label?: any;
  leftIcon?: any;
  leftIconColor?: string;
  staticLabel?: boolean;
  error?: string | undefined | null;
  labelStylesExternal: any;
  hint?: string;
}

const Textarea = (props: Props & TextInputProps) => {
  const hasError = !!props.error;
  return (
    <View style={props.style}>
      <TextInput
        //@ts-ignore
        error={hasError}
        staticLabel={props.staticLabel}
        multiline
        label={props.label}
        autoCapitalize={props.autoCapitalize}
        hint={props.hint}
        autoCorrect={false}
        left={
          props.leftIcon && (
            <TextInput.Icon
              icon={props.leftIcon}
              style={styles.leftIcon}
              color={props.leftIconColor}
            />
          )
        }
        {...props}
      />
      {props.error && <Text style={styles.error}>{props.error}</Text>}
    </View>
  );
};

Textarea.defaultProps = {
  label: '',
  staticLabel: true,
  error: null,
  leftIconColor: 'black',
};

export default Textarea;
