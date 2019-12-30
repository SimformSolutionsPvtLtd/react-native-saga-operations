import { StyleSheet } from 'react-native';
import { Colors } from '../../Theme';

const styles = StyleSheet.create({
  leftContainer: {
    position: 'absolute',
    left: 10,
    bottom: 5,
    width: 40,
    alignSelf: 'flex-start',
  },
  left: {
    color: Colors.black,
  },
  titleContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
  },
  extra: {
    flex: 1,
    backgroundColor: 'red',
  },
});

export default styles;
