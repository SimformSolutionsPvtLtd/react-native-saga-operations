import { StyleSheet } from 'react-native';
import { ApplicationStyles, Fonts } from '../../Theme';
const styles = StyleSheet.create({
  ...ApplicationStyles.screen,
  container: {
    padding: 20,
    flex: 1,
  },
  button: {
    width: 160,
    marginTop: 10,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
  },
  signup: {
    alignSelf: 'center',
    padding: 10,
    fontSize: Fonts.size.medium,
    fontWeight: 'bold',
  },
  header: {
    height: '20%',
    justifyContent: 'flex-end',
    paddingBottom: 20,
  },
  headerTitle: {
    ...Fonts.style.h2,
  },
  loaderContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  loader: {
    height: 60,
    width: 60
  }
});

export default styles;
