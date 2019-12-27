import { StyleSheet } from 'react-native';
import { Colors } from '../../Theme';
import { Platform } from 'react-native';

const styles = StyleSheet.create({
  container: {
    padding: 10,
    flex: 1,
  },
  button: {
    width: 100,
    marginTop: 10,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
  },
  title: {
    fontWeight: '700',
  },
  loader: {
    height: 50,
    width: 50,
  },
  emptyList: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  right: {
    color: Platform.OS === 'ios' ? Colors.black : Colors.white,
  },
});

export default styles;
