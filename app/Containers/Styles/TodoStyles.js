import { StyleSheet } from 'react-native';
import { Colors, Metrics } from '../../Theme';
import { Platform } from 'react-native';

const styles = StyleSheet.create({
  container: {
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
  flatlistContainer: {
    marginLeft: 10,
    marginTop: 10
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
  itemContainer: {
    flex: 1,
    minHeight: 55,
    paddingLeft: 10,
    justifyContent: 'center',
    backgroundColor: Colors.white
  },
  text: {
    padding: 5,
    fontSize: 12,
    alignSelf: 'center'
  },
  optionButton: {
    position: 'absolute',
    width: 40,
    right: 0,
    top: 0,
    alignItems: 'center',
    justifyContent: 'center',
  },
  option: {
    fontSize: 20,
    color: Colors.grey
  },
  rowBack: {
    alignItems: 'center',
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingLeft: 15,
    paddingRight: 15,
  },
  separator: {
    height: 1,
    width: '100%',
    backgroundColor: 'lightgrey'
  },
  delete: {
    color: Colors.grey
  }
});

export default styles;
