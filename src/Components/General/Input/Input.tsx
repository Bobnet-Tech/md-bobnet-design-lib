import React from 'react';
import { Text, TextInputProps, View } from 'react-native';
import styles from './styles';
import PassedIcon from '../../../Assets/PassedIcon';
import ErrorIcon from '../../../Assets/ErrorIcon';
import { TextInput } from 'react-native-paper';
import { Colors } from '../../../Theme';

interface Props {
  label?: any;
  leftIcon?: any;
  leftIconColor?: string;
  staticLabel?: boolean;
  error?: string | undefined | null;
  hint?: string;
  customLeftComponent: any;
  labelStylesExternal: any;
  outlineStyle?: any;
  contentStyle?: any;
  underlineStyle?: any;
  isEditable?: boolean; 
  errorCheck: boolean;
}

const Input = (props: Props & TextInputProps) => {
  const hasError = !!props.error;
  return (
    <View style={props.style}>
      <TextInput
        staticLabel={props.staticLabel}
        outlineStyle={
          (props.errorCheck &&
            (props.error ? styles.errorContainer : styles.passedContainer)) ||
          styles.container
        }
        //@ts-ignore
        error={hasError}
        underlineColor={Colors.gray}
        activeUnderlineColor={Colors.gray}
        underlineStyle={styles.underlineBar}
        label={props.label}
        editable={props.isEditable}
        autoCapitalize={props.autoCapitalize}
        autoCorrect={false}
        hint={props.hint}
        left={
          props.customLeftComponent ? ( // Check if customLeftComponent exists
          <TextInput.Icon
          icon={() => {
            return props.customLeftComponent
          }}
          style={styles.leftIcon}
        />
          ) : (
            props.leftIcon && ( // Fallback to leftIcon if customLeftComponent is not provided
              <TextInput.Icon
                icon={props.leftIcon}
                style={styles.leftIcon}
                color={props.leftIconColor}
              />
            )
          )
        }
        right={
          props.errorCheck &&
          (props.error ? (
            <TextInput.Icon icon={() => {
              return <ErrorIcon style={styles.rightIcon} />;
            }}/>
          ) : (
            <TextInput.Icon icon={() => {
              return <PassedIcon style={styles.rightIcon} />
            }}/>
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
  editable: true
};

export default Input;
