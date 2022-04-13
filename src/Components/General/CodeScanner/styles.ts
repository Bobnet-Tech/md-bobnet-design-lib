import { StyleSheet } from 'react-native';
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
});
