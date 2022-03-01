import { Colors, FontFamily } from '../../../Theme';
import { StyleSheet } from 'react-native';
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
  disabledText: {
    color: Colors.disabled,
  },
});
