import { Colors, FontFamily } from '../../../Theme';
import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 10,
    borderRadius: 10,
  },
  text: {},
  loadingContainer: {
    width: 90,
    paddingVertical: 10,
    borderRadius: 10,
  },
  primary: {
    backgroundColor: Colors.primary,
  },
  primaryOutlined: {
    borderColor: Colors.primary,
    borderWidth: 1,
  },
  primaryText: {
    color: Colors.white,
    fontFamily: FontFamily.bold,
  },
  primaryTextOutlined: {
    color: Colors.primary,
    fontFamily: FontFamily.bold,
  },
  secondary: {
    backgroundColor: Colors.secondary,
  },
  secondaryOutlined: {
    borderColor: Colors.secondary,
    borderWidth: 1,
  },
  secondaryText: {
    color: Colors.white,
    fontFamily: FontFamily.bold,
  },
  secondaryTextOutlined: {
    color: Colors.secondary,
    fontFamily: FontFamily.bold,
  },
  link: {
    backgroundColor: 'transparent',
  },
  linkText: {
    color: Colors.secondary,
    fontFamily: FontFamily.base,
  },
});
