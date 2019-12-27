import database from '@react-native-firebase/database';
import auth from '@react-native-firebase/auth';

export const userRef = (path = '') => {
  const user = auth().currentUser;
  return database().ref(`/users/${user.uid}/${path}`)
}