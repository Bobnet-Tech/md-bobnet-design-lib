import { StyleSheet } from 'react-native';
import { FontFamily } from '../../../Theme';
export default StyleSheet.create({
  container: {},
  defaultText: {
    fontFamily: FontFamily.base,
    marginHorizontal: 5,
  },
  button: {
    flexDirection: 'row',
    opacity: 1,
    alignItems: 'center',
  },
  disabled: {
    opacity: 0.5,
  },
  disabledText: {
    opacity: 0.5,
  },
});
