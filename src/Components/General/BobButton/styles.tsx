import { Colors, FontFamily } from '../../../Theme';
import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 10,
    borderRadius: 12,
  },
  text: {
    marginHorizontal: 5,
  },
  buttonContiner: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  loadingContainer: {
    width: 90,
    paddingVertical: 10,
    borderRadius: 10,
  },
  primary: {
    backgroundColor: Colors.blue,
  },
  primaryOutlined: {
    borderColor: Colors.black,
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
    backgroundColor: 'transparent',
    borderColor: Colors.lightGray,
    borderWidth: 1,
  },
  secondaryOutlined: {
    borderColor: Colors.blue,
    borderWidth: 1,
  },
  secondaryText: {
    color: Colors.lightGray,
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
