import auth from '@react-native-firebase/auth';
import database from '@react-native-firebase/database';
import { strings } from '../../Constants';
import { userRef } from './Database';
import { getCurrentTimeStamp } from '../../Services/Utility';
import { useRef } from 'react';

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
        userRef().set({
          email: result.user._user.email,
          createdAt: getCurrentTimeStamp(),
          lastLoginAt: getCurrentTimeStamp()
        });
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
        const user = auth().currentUser;
        userRef().update({ lastLoginAt: getCurrentTimeStamp() })
        resolve(result.user);
      })
      .catch(e => {
        const message = errorType[e.code] || strings.somethingWrong;
        reject(message);
      });
  });
}

export function insertTodo(todoText) {
  return new Promise((resolve, reject) => {
    const uid = getCurrentTimeStamp()
    const todo = {
      id: uid,
      text: todoText,
      createdAt: uid,
      updatedAt: uid,
      deleted: 0,
      completed: 0
    }
    userRef(`todo/${uid}`).set(todo).then(() => resolve(todo)).catch(e => reject(e));
  })
}

export function fetchTodos() {
  return new Promise((resolve, reject) => {
    userRef().orderByChild('email').equalTo('brijesh2@gmail.com').once('value', snap => {
      alert(JSON.stringify(snap.val()))
    }).catch(e => alert(e));
    // userRef('todo').once('value', (snapshot) => {
    //   alert(JSON.stringify(snapshot.val()))
    //   if (snapshot) {
    //     resolve(Object.values(snapshot.val()))
    //   }
    // }).catch(e => reject(e));
  })
}