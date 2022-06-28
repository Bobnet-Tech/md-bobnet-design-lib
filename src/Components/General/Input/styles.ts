import { Colors, FontFamily } from '../../../Theme';
import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flexDirection: 'row',
    borderColor: Colors.black,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: Colors.gray,
    paddingHorizontal: 11,
    backgroundColor: Colors.white,
    paddingTop: 10,
    paddingBottom: 10,
    alignContent: 'center',
    justifyContent: 'center',
    marginVertical: 2,
  },
  labelStyles: {
    fontFamily: FontFamily.base,
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
  errorContainer: {
    flexDirection: 'row',
    borderColor: Colors.black,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: Colors.error,
    paddingHorizontal: 11,
    backgroundColor: Colors.white,
    paddingTop: 10,
    paddingBottom: 10,
    alignContent: 'center',
    justifyContent: 'center',
    marginVertical: 2,
  },
  textarea: { height: 150, textAlignVertical: 'top', color: 'black' },
  customFlag: {
    backgroundColor: 'white',
    borderBottomWidth: StyleSheet.hairlineWidth,
    paddingVertical: 13.5,
    marginVertical: 2,
    borderBottomColor: Colors.gray,
  },
  customFlagText: {
    fontFamily: FontFamily.base,
    fontSize: 15,
    paddingLeft: 10,
    textAlign: 'center',
    color: Colors.gray,
  },
});
