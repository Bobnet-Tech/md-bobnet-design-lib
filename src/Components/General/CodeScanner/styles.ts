import { StyleSheet } from 'react-native';
import { widthPercentageToDP } from 'react-native-responsive-screen';

export default StyleSheet.create({
  modalContent: {
    flex: 1,
    backgroundColor: '#fff',
  },
  subTitle: {
    textAlign: 'center',
    paddingBottom: 5,
    fontSize: 20,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  closeButton: {
    position: 'absolute',
    bottom: 20,
    right: 30,
    width: 60,
    height: 60,
    marginHorizontal: 'auto',
    backgroundColor: 'red',
    borderRadius: 1500,
    justifyContent: 'center',
    alignItems: 'center',
  },
  qrTarget: {
    flex: 1,
    alignSelf: 'center',
    position: 'absolute',
    top: widthPercentageToDP(50),
  },
  closeIcon: {
    fontSize: 20,
    color: 'white',
  },
});
