/* eslint-disable react-native/no-inline-styles */
import { storiesOf } from '@storybook/react-native';
import React, { useState } from 'react';
import CenterView from '../CenterView';
import {
  PhoneInput,
  Input,
  Textarea,
  PasswordInput,
  BobInput,
  BobPhoneInput,
} from 'react-native-bob-design';
import { View, Text } from 'react-native';
import { withKnobs } from '@storybook/addon-ondevice-knobs';
import { text } from '@storybook/addon-knobs';
import EmailIcon from '../../../assets/Svgs/EmailIcon';
import Icon from 'react-native-vector-icons/Feather';

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
            onSelectCountry={(country) =>
              setDialCode(country === 'ro' ? '+40' : '+373')
            }
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
            customLeftComponent={
              <Icon
                style={{ marginRight: 10 }}
                name={'user'}
                size={18}
                color={'#1F62AE'}
              />
            }
            style={{ backgroundColor: 'white' }}
          />
          <Input
            staticLabel={false}
            value={firstName}
            onChangeText={setFirstName}
            // error={'This field is required'}
            style={{ marginBottom: 5 }}
            label={'First Name'}
            errorCheck={true}
          />
          <PasswordInput
            value={firstName}
            onChangeText={setFirstName}
            error={'This field is required'}
            label={'Password'}
            errorCheck={true}
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
  )
  .add('Bob Input', () =>
    React.createElement(() => {
      const [description, setDescription] = useState();
      const [dialCode, setDialCode] = useState('+40');

      return (
        <View>
          <View style={{ marginBottom: 20 }}>
            <BobInput
              value={description}
              onChangeText={setDescription}
              customLeftComponent={
                <Icon name={'user'} size={18} color={'#1F62AE'} />
              }
              label={
                <Text
                  style={{
                    color: '#111E28',
                    fontFamily: 'Nunito-Bold',
                    fontSize: 13,
                  }}
                >
                  Full Name
                </Text>
              }
            />
          </View>
          <View style={{ marginBottom: 20 }}>
            <BobInput
              value={description}
              onChangeText={setDescription}
              placeholder={'john.doe@email.com'}
              customLeftComponent={
                <Icon name={'mail'} size={18} color={'#1F62AE'} />
              }
              label={
                <Text
                  style={{
                    color: '#111E28',
                    fontFamily: 'Nunito-Bold',
                    fontSize: 13,
                  }}
                >
                  Email
                </Text>
              }
            />
          </View>
          <View style={{ marginBottom: 20 }}>
            <BobPhoneInput
              dialCode={dialCode}
              value={description}
              onChangeText={setDescription}
              customLeftComponent={
                <Icon name={'phone'} size={18} color={'#1F62AE'} />
              }
              label={
                <Text
                  style={{
                    fontFamily: 'Nunito-Bold',
                    color: '#111E28',
                    fontSize: 13,
                  }}
                >
                  Phone Number
                </Text>
              }
              onSelectCountry={(country) =>
                setDialCode(country === 'md' ? '+373' : '+40')
              }
            />
          </View>
        </View>
      );
    })
  );
