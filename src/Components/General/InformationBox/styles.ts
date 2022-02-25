import { StyleSheet } from 'react-native';
import { Colors } from 'src/Theme';

export default StyleSheet.create({
  informationContainer: {
    flexDirection: 'row',
    backgroundColor: '#F4F4F4',
    alignItems: 'center',
    marginVertical: 5,
    padding: 5,
    borderRadius: 10,
  },
  informationIconContainer: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    flex: 2,
  },
  informationMessageContainer: {
    flex: 8,
    borderColor: Colors.primary,
    borderRadius: 10,
  },
  text: {},
});
