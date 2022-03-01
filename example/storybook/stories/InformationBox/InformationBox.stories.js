import { storiesOf } from '@storybook/react-native';
import React from 'react';
import CenterView from '../CenterView';
import { InformationBox } from 'react-native-bob-design';

const texts = {
  long: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque sem nisi, dapibus sed pellentesque id, finibus et tortor. Pellentesque a luctus sapien, sed tristique magna. Mauris elementum mollis odio non aliquam. Phasellus nulla justo, suscipit id magna et, cursus vehicula est. Proin vel dictum lorem, ac condimentum libero. Quisque mollis quam id orci dictum aliquam. Duis consequat odio at turpis vehicula rutrum. Mauris dignissim odio vitae augue vulputate porttitor.',
  short:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque sem nisi, dapibus sed pellentesque id, finibus et tortor.',
};
storiesOf('InformationBox', module)
  .addDecorator((getStory) => <CenterView>{getStory()}</CenterView>)
  .add('with long text', () => (
    <InformationBox
      text={texts.long}
      iconType={'AntDesign'}
      iconName={'clockcircleo'}
      iconSize={32}
    />
  ))
  .add('with short text', () => (
    <InformationBox
      text={texts.short}
      iconType={'AntDesign'}
      iconName={'clockcircleo'}
      iconSize={32}
    />
  ));
