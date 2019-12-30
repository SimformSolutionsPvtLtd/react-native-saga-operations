import { StyleSheet } from 'react-native';
import { ApplicationStyles, Colors } from '../../Theme';

const styles = StyleSheet.create({
  ...ApplicationStyles.screen,
  container: {
    flex: 1,
  },
  innerContainer: {
    padding: 10,
  },
  button: {
    marginTop: 10,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
  },
  right: {
    color: Colors.black,
  },
  title: {
    textAlign: 'center',
    fontSize: 14,
    color: Colors.grey,
    paddingBottom: 20,
  },
});

export default styles;
