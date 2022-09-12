/* eslint-disable react/require-default-props */
import React from 'react';
import { Text, TextInputProps, View } from 'react-native';

import { FloatingLabelInput } from 'react-native-floating-label-input';
import Icon from 'react-native-vector-icons/FontAwesome';
import styles from './styles';

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
  let labelStyles = {
    ...styles.labelStyles,
    ...props.labelStylesExternal,
    ...(props.staticLabel ? { paddingTop: 10 } : {}),
  };
  return (
    <View style={props.style}>
      <FloatingLabelInput
        inputStyles={styles.textarea}
        staticLabel={props.staticLabel}
        multiline
        labelStyles={labelStyles}
        containerStyles={styles.container}
        label={props.label}
        animationDuration={300}
        autoCapitalize={props.autoCapitalize}
        hint={props.hint}
        autoCorrect={false}
        leftComponent={
          props.leftIcon && (
            <Icon
              name={props.leftIcon}
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
