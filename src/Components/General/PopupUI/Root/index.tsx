// @ts-nocheck
import React, { Component } from 'react';
import { View } from 'react-native';

import Popup from '../Popup';

class Root extends Component<any, any> {
  render() {
    return (
      <View
        accessibilityLabel="popup-root"
        ref={(c) => (this._root = c)}
        style={{ flex: 1 }}
        {...this.props}
      >
        {this.props.children}
        <Popup
          ref={(c) => {
            if (c) Popup.popupInstance = c;
          }}
        />
      </View>
    );
  }
}

export default Root;
