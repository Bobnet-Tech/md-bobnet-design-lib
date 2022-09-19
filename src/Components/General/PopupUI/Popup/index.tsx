// @ts-nocheck
import React, { Component } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Image,
  Animated,
  Dimensions,
  Alert,
} from 'react-native';
import { Colors, FontFamily } from '../../../../Theme';
import Loading from '../../Button/Loading';
const WIDTH = Dimensions.get('screen').width;
const HEIGHT = Dimensions.get('screen').height;

class Popup extends Component<any, any> {
  static popupInstance;

  static show({ ...config }) {
    this.popupInstance.start(config);
  }

  static hide() {
    this.popupInstance.hidePopup();
  }

  state: any = {
    positionView: new Animated.Value(HEIGHT),
    opacity: new Animated.Value(0),
    positionPopup: new Animated.Value(HEIGHT),
    popupHeight: 0,
  };

  start({ ...config }) {
    this.setState({
      title: config.title,
      type: config.type,
      icon: config.icon !== undefined ? config.icon : false,
      textBody: config.textBody,
      button: config.button !== undefined ? config.button : true,
      secondButton: config.secondButton ? config.secondButton : false,
      buttonText: config.buttonText || 'Ok',
      secondButtonText: config.secondButtonText || 'Renunta',
      callback:
        config.callback !== undefined
          ? config.callback
          : this.defaultCallback(),
      secondCallback:
        config.secondCallback !== undefined && config.secondCallback,
      isLoading: config.isLoading || false,
      secondIsLoading: config.secondIsLoading || false,
      background: config.background || 'rgba(0, 0, 0, 0.5)',
      timing: config.timing,
      autoClose: config.autoClose !== undefined ? config.autoClose : false,
    });

    Animated.sequence([
      Animated.timing(this.state.positionView, {
        toValue: 0,
        duration: 100,
        useNativeDriver: false,
      }),
      Animated.timing(this.state.opacity, {
        toValue: 1,
        duration: 300,
        useNativeDriver: false,
      }),
      Animated.spring(this.state.positionPopup, {
        toValue: HEIGHT / 2 - this.state.popupHeight / 2,
        bounciness: 15,
        useNativeDriver: true,
      }),
    ]).start();

    if (config.autoClose && config.timing !== 0) {
      const duration = config.timing > 0 ? config.timing : 5000;
      setTimeout(() => {
        this.hidePopup();
      }, duration);
    }
  }

  hidePopup() {
    Animated.sequence([
      Animated.timing(this.state.positionPopup, {
        toValue: HEIGHT,
        duration: 250,
        useNativeDriver: true,
      }),
      Animated.timing(this.state.opacity, {
        toValue: 0,
        duration: 300,
        useNativeDriver: false,
      }),
      Animated.timing(this.state.positionView, {
        toValue: HEIGHT,
        duration: 100,
        useNativeDriver: false,
      }),
    ]).start();
  }

  defaultCallback() {
    return Alert.alert('Callback!', 'Callback complete!', [
      { text: 'Ok', onPress: () => this.hidePopup() },
    ]);
  }

  handleImage(type) {
    switch (type) {
      case 'SadFace':
        return require('../../../../Assets/SadFace.png');
      case 'NeutralFace':
        return require('../../../../Assets/NeutralFace.png');
      case 'HappyFace':
        return require('../../../../Assets/HappyFace.png');
      case 'Success':
        return require('../../../../Assets/Success.png');
      case 'Danger':
        return require('../../../../Assets/Error.png');
      case 'Warning':
        return require('../../../../Assets/Warning.png');
      case 'DeactivateAccount':
        return require('../../../../Assets/deactivate.png');
      case 'DeleteAddress':
        return require('../../../../Assets/deleteAddrr.png');
    }
  }

  render() {
    const {
      title,
      type,
      textBody,
      buttonText,
      secondButtonText,
      callback,
      secondCallback,
      background,
      isLoading,
      secondIsLoading,
    }: any = this.state;
    let el = null;
    let secondEl = null;
    if (this.state.button) {
      el = (
        <TouchableOpacity
          style={[styles.Button, styles[type]]}
          onPress={!isLoading ? callback : null}
        >
          {isLoading ? (
            <Loading outlined={true} />
          ) : (
            <Text style={[styles.TextButton, styles['Text' + type]]}>
              {buttonText}
            </Text>
          )}
        </TouchableOpacity>
      );
    } else {
      el = <Text />;
    }
    if (this.state?.secondButton) {
      secondEl = (
        <TouchableOpacity
          style={[styles.secondButton, styles[type]]}
          onPress={!isLoading ? secondCallback : null}
        >
          {secondIsLoading ? (
            <Loading outlined={false} />
          ) : (
            <Text style={[styles.secondTextButton, styles['Text' + type]]}>
              {secondButtonText}
            </Text>
          )}
        </TouchableOpacity>
      );
    } else {
      secondEl = <Text />;
    }

    return (
      <Animated.View
        ref={(c) => (this._root = c)}
        style={[
          styles.Container,
          {
            backgroundColor: background || 'transparent',
            opacity: this.state.opacity,
            transform: [{ translateY: this.state.positionView }],
          },
        ]}
      >
        <Animated.View
          onLayout={(event) => {
            this.setState({ popupHeight: event.nativeEvent.layout.height });
          }}
          style={[
            styles.Message,
            {
              transform: [{ translateY: this.state.positionPopup }],
            },
          ]}
        >
          <View style={styles.Header} />
          {this.state.icon ? (
            this.state.icon
          ) : (
            <Image
              source={this.handleImage(type)}
              resizeMode="contain"
              style={styles.Image}
            />
          )}
          <View style={styles.Content}>
            {title !== '' && <Text style={styles.Title}>{title}</Text>}
            {textBody !== '' && <Text style={styles.Desc}>{textBody}</Text>}
            {el}
            {secondEl}
          </View>
        </Animated.View>
      </Animated.View>
    );
  }
}

const styles = StyleSheet.create({
  Container: {
    position: 'absolute',
    zIndex: 99999,
    width: WIDTH,
    height: HEIGHT,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    alignItems: 'center',
    top: 0,
    left: 0,
  },
  Message: {
    maxWidth: 350,
    width: 290,
    minHeight: 300,
    backgroundColor: '#fff',
    borderRadius: 30,
    alignItems: 'center',
    overflow: 'hidden',
    position: 'absolute',
  },
  Content: {
    padding: 20,
    paddingBottom: 30,

    alignItems: 'center',
  },
  Header: {
    height: 230,
    width: 290,
    backgroundColor: '#FBFBFB',
    borderRadius: 80,
    marginTop: -120,
  },
  Image: {
    width: 130,
    height: 65,
    position: 'absolute',
    top: 20,
  },
  Title: {
    textAlign: 'center',
    fontFamily: FontFamily.bold,
    fontSize: 18,
    color: '#333',
  },
  Desc: {
    textAlign: 'center',
    color: '#666',
    fontFamily: FontFamily.base,
    marginTop: 10,
  },
  Button: {
    borderRadius: 10,
    height: 40,
    width: 130,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '',
    marginTop: 30,
  },
  secondButton: {
    height: 20,
    width: 130,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },
  TextButton: {
    color: Colors.primary,
    fontFamily: FontFamily.bold,
  },
  secondTextButton: {
    color: Colors.primary,
    fontFamily: FontFamily.semiBold,
    textDecorationLine: 'underline',
  },
  TextSuccess: {
    color: Colors.secondary,
  },
  TextDanger: {
    color: Colors.warning,
  },
  TextWarning: {
    color: Colors.primary,
  },
  TextSadFace: {
    color: Colors.error,
  },
  TextNeutralFace: {
    color: Colors.primary,
  },
  TextHappyFace: {
    color: Colors.secondary,
  },
  Success: {
    borderColor: Colors.secondary,
  },
  Danger: {
    borderColor: Colors.warning,
  },
  Warning: {
    borderColor: Colors.primary,
  },
  SadFace: {
    borderColor: Colors.warning,
  },
  HappyFace: {
    borderColor: Colors.secondary,
  },
  NeutralFace: {
    borderColor: Colors.primary,
  },
});

export default Popup;
