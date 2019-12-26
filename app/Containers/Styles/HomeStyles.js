import { StyleSheet } from 'react-native';
import { Colors, Fonts } from '../../Theme';

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
    color: Colors.black,
  },
});

export default styles;
