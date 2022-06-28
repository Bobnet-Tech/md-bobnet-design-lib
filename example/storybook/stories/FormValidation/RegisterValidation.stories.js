/* eslint-disable react-native/no-inline-styles */
import { storiesOf } from '@storybook/react-native';
import React from 'react';
import CenterView from '../CenterView';
import { Input, PhoneInput } from 'react-native-bob-design';
import { Text, View } from 'react-native';
import { withKnobs } from '@storybook/addon-ondevice-knobs';
import { text } from '@storybook/addon-knobs';
import { useFormik } from 'formik';
import * as yup from 'yup';

storiesOf('RegisterValidation', module)
  .addDecorator(withKnobs)
  .addDecorator((getStory) => <CenterView>{getStory()}</CenterView>)
  .add('Form', () =>
    React.createElement(() => {
      const formik = useFormik({
        initialValues: {
          email: '',
          phoneNumber: '',
          firstName: '',
          lastName: '',
          dial_code: '+4',
        },
        validationSchema: yup.object().shape({
          email: yup
            .string()
            .trim()
            .email(text('invalidEmail'))
            .required(text('requiredEmail')),
          firstName: yup.string().trim().required(text('firstNameRequired')),
          lastName: yup.string().trim().required(text('lastNameRequired')),
          dial_code: yup.string().trim().required(),
          phoneNumber: yup
            .string()
            .trim()
            .typeError(text('invalidPhone'))
            .required(text('invalidPhone'))
            .matches(/^[0-9]+$/, text('invalidPhone'))
            .min(10, text('invalidPhoneLength'))
            .max(10, text('invalidPhoneLength')),
          askAge: yup.boolean().required(text('ageRequired')),
          askPrivacyAndPolicy: yup
            .boolean()
            .required(text('privacyAndPolicyRequired')),
        }),
        validateOnChange: false,
        validateOnBlur: true,
        onSubmit: () => {
          console.log('succes');
        },
      });
      const {
        handleChange,
        values: formValues,
        touched,
        isValid,
        errors,
      } = formik;

      return (
        <View>
          <Input
            staticLabel={false}
            error={touched.firstName && !!errors.firstName && errors.firstName}
            onBlur={formik.handleBlur('firstName')}
            onChangeText={handleChange('firstName')}
            value={formValues.firstName}
            label={text('firstName')}
            leftIcon="user"
            customRightComponent={
              touched.firstName &&
              (errors.firstName ? <Text>error</Text> : <Text>done</Text>)
            }
          />
          <Input
            staticLabel={false}
            error={touched.lastName && !!errors.lastName && errors.lastName}
            onBlur={formik.handleBlur('lastName')}
            onChangeText={handleChange('lastName')}
            value={formValues.lastName}
            label={text('lastName')}
          />
          <Input
            staticLabel={false}
            error={touched.email && !!errors.email && errors.email}
            onBlur={formik.handleBlur('email')}
            keyboardType={'email-address'}
            autoCapitalize={'none'}
            autoCompleteType={'email'}
            onChangeText={handleChange('email')}
            value={formValues.email}
            label={text('email')}
          />
          <PhoneInput
            staticLabel={false}
            error={
              touched.phoneNumber && !!errors.phoneNumber && errors.phoneNumber
            }
            onBlur={formik.handleBlur('phoneNumber')}
            onChangeText={handleChange('phoneNumber')}
            value={formValues.phoneNumber}
            keyboardType={'numeric'}
            label={text('phone')}
          />
        </View>
      );
    })
  );
