import React, { useState } from 'react'
import firebase from 'firebase'

import db,  { firebaseConfig } from './db'

const localStorage = global.window.localStorage

//------------------------------------  註冊  --------------------------------
export const signup = (onCloseSignUp) => {
  const username = document.getElementById("signUpUsername").value;
  const email = document.getElementById("signUpEmail").value;
  const password = document.getElementById("signUpPwd").value;

  if (isUserTaken(email)) {
    console.log('User exists')
    return 'User exists'
  } else {
    //先指定token和userID是null，下面再指定他是什麼值
    let token = null
    let userId = null 
    // equal let token, userId
  firebase.auth().createUserWithEmailAndPassword(email, password)
  .then((data) => { //data是第一層拿到的response
    //UID是一串亂碼
    userId = data.user.uid //第一層拿到了資料，把user的uid指定為user id
    return data.user.getId() // JWT token（過一段時間就會過期），用來控制畫面登入登出
  })
  .then((idToken) => {
    token = idToken //idToken是由上一個then帶入，idtoken就是每次登入會拿到的jwt token，不是uid
    const user = {
      username: username,
      email: email,
      userId
    }
    //把上面的user object建到下面users的collection裡面，並且拿e-mail當索引值
    db.doc(`/users/${email}`).set(user).catch((error) => {
      console.log(error)
    })
    localStorage.setItem('token', idToken) //token是key，idToken是value
    localStorage.setItem('email', email)
    onCloseSignUp()
  })
  .catch((e) => {
    // Handle Errors here.
    const errorCode = e.code
    const errorMessage = e.message
    // ...
  })
  }

  // console.log (username, email, password);

  // }
}

//------------------------------------  登入  --------------------------------
export const signin = (onCloseSignIn, handlePush) => {
  const email = document.getElementById("signInEmail").value;
  const password = document.getElementById("signInPwd").value;
    firebase.auth().signInWithEmailAndPassword(email, password)
      .then((data) => {
        console.log(data)
        return data.user.getIdToken()
      })
      .then((idToken) => {
        localStorage.setItem('token', idToken) //token是key，idToken是value
        localStorage.setItem('email', email)
        onCloseSignIn()
        handlePush()
      })
      .catch((e) => {
        // Handle Errors here.
        const errorCode = e.code
        const errorMessage = e.message
        alert('email or password not found')
        // ...
      })
  }

//------------------------------------  用來驗證是否user已經重複  --------------------------------
export const isUserTaken = (email) => {
  db.doc(`/users/${email}`).get().then((doc) => {
    return doc.exists
  })
}

//------------------------------------  新增旅遊記事  --------------------------------
export const addExperience = (file, close) => {
  const title = document.getElementById('experienceTitle').value
  const date = document.getElementById('experienceDate').value
  const city = document.getElementById('experienceCity').value
  const content = document.getElementById('experienceContent').value
  const email = localStorage.getItem('email')

  const output = {
    title,
    email,
    city,
    content,
    date
  }

  db
    .collection('experiences')
    .add(output)
    .then((doc) => {
      uploadImage(doc.id, file)
      const imgUrl = `https://firebasestorage.googleapis.com/v0/b/${firebaseConfig.storageBucket}/o/${doc.id}?alt=media`
      db.doc(`/experiences/${doc.id}`).update({
        imgUrl
      })
      close()
      location.reload()
    })
    .catch((error) => {
      console.error(error)
    })
}


//------------------------------------  上傳圖片  --------------------------------
export const uploadImage = (id, file) => {
  const ref = firebase.storage().ref(id)
  ref.putString(file, 'data_url')
    .then((snapshot) => {
      return true
    })
    .catch((error) => {
      console.log(error)
      return false
    })
}

//------------------------------------  獲取已上傳的旅遊記事資料  --------------------------------

export const getExperiences = (set) => {
  const email = localStorage.getItem('email')
  const response = []
  db
    .collection('experiences')
    .where('email', '==', email)
    .orderBy('date', 'desc')
    .get()
    .then((data) => {
      data.docs.map((doc) => {
        const temp = doc.data()
        temp.id = doc.id
        response.push(temp)
      })
      set(response)
    })
    .catch((error) => {
      console.error(error)
      // return response.status(500).json({ error: error.code })
    })
}

//------------------------------------  分享旅遊記事  --------------------------------
export const getShareExperiences = (id, set) => {
  const response = []

  db
    .collection('users')
    .where('userId', '==', id)
    .get()
    .then((data) => {
      let user
      data.docs.map((doc) => {
        const temp = doc.data()
        user = temp
      })
      return user.email
    }).then((email) => {
      db
        .collection('experiences')
        .where('email', '==', email)
        .orderBy('date', 'desc')
        .get()
        .then((data) => {
          data.docs.map((doc) => {
            const temp = doc.data()
            temp.id = doc.id
            response.push(temp)
          })
          set(response)
        })
        .catch((error) => {
          console.error(error)
          // return response.status(500).json({ error: error.code })
        })
    })
}
