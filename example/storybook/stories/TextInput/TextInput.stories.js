/* eslint-disable react-native/no-inline-styles */
import { storiesOf } from '@storybook/react-native';
import React, { useState } from 'react';
import CenterView from '../CenterView';
import {
  PhoneInput,
  Input,
  Textarea,
  PasswordInput,
} from 'react-native-bob-design';
import { View } from 'react-native';
import { withKnobs } from '@storybook/addon-ondevice-knobs';
import { text } from '@storybook/addon-knobs';
import EmailIcon from '../../../assets/Svgs/EmailIcon'


storiesOf('Inputs', module)
  .addDecorator(withKnobs)
  .addDecorator((getStory) => <CenterView>{getStory()}</CenterView>)
  .add('PhoneInput', () =>
    React.createElement(() => {
      const [phone, setPhone] = useState();
      const [dialCode, setDialCode] = useState('+40');
      return (
        <View>
          <PhoneInput
            staticLabel={false}
            onChangeText={setPhone}
            label={text('Phone Label 1', 'Phone Number')}
            value={phone}
            dialCode={dialCode}
            onSelectCountry={(country) => setDialCode(country === 'ro' ? '+40' : '+373')}
            phoneIcon={{ marginLeft: 15 }}
            error={text('Error', 'This field is required')}
          />
        </View>
      );
    })
  )
  .add('TextInput', () =>
    React.createElement(() => {
      const [firstName, setFirstName] = useState();
      const [lastName, setLastName] = useState();
      return (
        <View>
          <Input
            staticLabel={false}
            error={false}
            value={lastName}
            labelStylesExternal={{ marginLeft: -10 }}
            onChangeText={setLastName}
            label={'Last Name'}
            leftIcon={'email'}
            customLeftComponent={<EmailIcon />}
            style={{backgroundColor: 'white'}}
          />
          <Input
            staticLabel={false}
            value={firstName}
            onChangeText={setFirstName}
            error={'This field is required'}
            style={{ marginBottom: 5 }}
            label={'First Name'}
          />
        </View>
      );
    })
  )
  .add('Textarea', () =>
    React.createElement(() => {
      const [description, setDescription] = useState();
      return (
        <View>
          <Textarea
            staticLabel={true}
            hint={'...'}
            error={false}
            value={description}
            style={{ marginBottom: 5 }}
            onChangeText={setDescription}
            label={'Description'}
          />
          <Textarea
            staticLabel={false}
            value={description}
            onChangeText={setDescription}
            error={'This field is required'}
            style={{ marginBottom: 5 }}
            label={'Description'}
          />
        </View>
      );
    })
  )
  .add('Password Input', () =>
    React.createElement(() => {
      const [description, setDescription] = useState();
      return (
        <View>
          <PasswordInput
            value={description}
            onChangeText={setDescription}
            error={'This field is required'}
            label={'Password'}
          />
        </View>
      );
    })
  );
