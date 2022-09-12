import React from 'react';
import { Text, TextInputProps, View } from 'react-native';
import { FloatingLabelInput } from 'react-native-floating-label-input';
import Icon from 'react-native-vector-icons/FontAwesome';
import styles from './styles';
import PassedIcon from '../../../Assets/PassedIcon';
import ErrorIcon from '../../../Assets/ErrorIcon';

interface Props {
  label?: any;
  leftIcon?: any;
  leftIconColor?: string;
  staticLabel?: boolean;
  error?: string | undefined | null;
  hint?: string;
  customLeftComponent: any;
  labelStylesExternal: any;
  errorCheck: boolean;
}

const Input = (props: Props & TextInputProps) => {
  let labelStyles = {
    ...styles.labelStyles,
    ...props.labelStylesExternal,
    ...(props.staticLabel ? { paddingTop: 10 } : {}),
  };
  return (
    <View style={props.style}>
      <FloatingLabelInput
        staticLabel={props.staticLabel}
        labelStyles={labelStyles}
        containerStyles={
          (props.errorCheck &&
            (props.error ? styles.errorContainer : styles.passedContainer)) ||
          styles.container
        }
        label={props.label}
        animationDuration={300}
        autoCapitalize={props.autoCapitalize}
        autoCorrect={false}
        hint={props.hint}
        hintTextColor="#c1c1c1"
        leftComponent={
          props.customLeftComponent ||
          (props.leftIcon && (
            <Icon
              name={props.leftIcon}
              style={styles.leftIcon}
              color={props.leftIconColor}
            />
          ))
        }
        rightComponent={
          props.errorCheck &&
          (props.error ? (
            <ErrorIcon style={styles.rightIcon} />
          ) : (
            <PassedIcon style={styles.rightIcon} />
          ))
        }
        {...props}
      />
      {props.error && <Text style={styles.error}>{props.error}</Text>}
    </View>
  );
};

Input.defaultProps = {
  label: '',
  staticLabel: true,
  error: null,
  leftIconColor: 'black',
  errorCheck: false,
};

export default Input;
