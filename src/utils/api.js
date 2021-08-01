import React, { useState } from 'react'
import firebase from 'firebase'

import db from './db'

const localStorage = global.window.localStorage

export const signup = () => {
  let username = document.getElementById("signUpUsername").value;
  let email = document.getElementById("signUpEmail").value;
  let password = document.getElementById("signUpPwd").value;

  firebase.auth().createUserWithEmailAndPassword(email, password)
  .then((res) => {
    console.log(res)
    const user = {
      username: username,
      email: email,
      userId: res.data.userId
    }
    // db.doc(`/users/${email}`).set(user).catch((error) => {
    //   console.log(error)
    // })
  })
  .catch((e) => {
    // Handle Errors here.
    const errorCode = e.code
    const errorMessage = e.message
    // ...
  })
  // if (isUserTaken(email)) {
  //   console.log('User exists')
  //   return 'User exists'
  // } else {

  // console.log (username, email, password);

  // }
}

export const login = (email, password) => {
    firebase.auth().signInWithEmailAndPassword(email, password)
      .then((res) => {
        console.log(res)
      })
      .catch((e) => {
        // Handle Errors here.
        const errorCode = e.code
        const errorMessage = e.message
        // ...
      })
  }

export const isUserTaken = (email) => {
  console.log(email)
  db.collection('users').doc(`${email}`).get().then((doc) => {
    if (doc.exists) {
      return true
    } else {
      return false
    }
  }).catch((error) => {
    console.log(error)
  })
}