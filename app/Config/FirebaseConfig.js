import auth from '@react-native-firebase/auth';
import { strings } from '../Constants';

const errorType = {
  'auth/email-already-in-use': 'User is already registered.',
  'auth/user-not-found': 'Username does not exist! Are you trying to Register?',
  'auth/wrong-password': 'You entered wrong password',
};

export function signUpWithFirebase(email, password) {
  return new Promise((resolve, reject) => {
    auth()
      .createUserWithEmailAndPassword(email, password)
      .then(result => {
        resolve(result.user._user);
      })
      .catch(e => {
        const message = errorType[e.code] || strings.somethingWrong;
        reject(message);
      });
  });
}

export function signInWithFirebase(email, password) {
  return new Promise((resolve, reject) => {
    auth()
      .signInWithEmailAndPassword(email, password)
      .then(result => {
        resolve(result.user);
      })
      .catch(e => {
        const message = errorType[e.code] || strings.somethingWrong;
        reject(message);
      });
  });
}
