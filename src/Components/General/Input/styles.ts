import { Colors, FontFamily } from '../../../Theme';
import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flexDirection: 'row',
    borderColor: Colors.black,

    borderWidth: StyleSheet.hairlineWidth,
    borderRadius: 12,
    paddingHorizontal: 11,
    backgroundColor: Colors.white,
    paddingTop: 10,
    paddingBottom: 10,
    alignContent: 'center',
    justifyContent: 'center',
    marginVertical: 2,
  },
  labelStyles: {
    fontFamily: FontFamily.bold,
    color: '#000000',
  },
  leftIcon: {
    fontSize: 18,
    paddingRight: 5,
  },
  flag: {
    width: 30,
    height: 25,
    borderColor: '#000000',
    borderWidth: 1,
  },
  error: {
    fontSize: 12,
    fontFamily: FontFamily.base,
    color: Colors.error,
  },
  textarea: { height: 150, textAlignVertical: 'top', color: 'black' },
});
