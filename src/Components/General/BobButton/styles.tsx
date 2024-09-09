import { Colors, FontFamily } from '../../../Theme';
import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 38,
    borderRadius: 12,
  },
  text: {
    marginHorizontal: 5,
  },
  buttonContiner: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  primary: {
    backgroundColor: Colors.blue,
    borderWidth: 1,
    borderColor: Colors.blue,
  },
  primaryOutlined: {
    borderColor: Colors.blue,
    borderWidth: 1,
  },
  primaryText: {
    color: Colors.white,
    fontFamily: FontFamily.bold,
  },
  primaryTextOutlined: {
    color: Colors.blue,
    fontFamily: FontFamily.bold,
  },
  secondary: {
    backgroundColor: Colors.green,
    borderColor: Colors.green,
    borderWidth: 1,
  },
  secondaryOutlined: {
    borderColor: Colors.neutral,
    borderWidth: 1,
  },
  secondaryText: {
    color: Colors.lightTextColor,
    fontFamily: FontFamily.bold,
  },
  secondaryTextOutlined: {
    color: Colors.blue,
    fontFamily: FontFamily.bold,
  },
  link: {
    backgroundColor: 'transparent',
  },
  linkText: {
    color: Colors.blue,
    fontFamily: FontFamily.base,
  },
});
