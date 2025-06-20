import React from 'react';
import { linkTo } from '@storybook/addon-links';
import { storiesOf } from '@storybook/react-native';
import Welcome from './index';

storiesOf('Welcome', module).add('to Storybook', () => (
  <Welcome showApp={linkTo('InformationBox')} />
));
