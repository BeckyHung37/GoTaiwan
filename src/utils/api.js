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


// ------------------------------------  新增旅遊記事  --------------------------------
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
      // ------------------------------------  上傳圖片  --------------------------------
      const ref = firebase.storage().ref(doc.id)
      const task = ref.putString(file, 'data_url')
      task.on('state_changed',
        (snapshot) => {
          // Observe state change events such as progress, pause, and resume
          // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
          var progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100
          console.log('Upload is ' + progress + '% done')
          switch (snapshot.state) {
            case firebase.storage.TaskState.PAUSED: // or 'paused'
              console.log('Upload is paused')
              break
            case firebase.storage.TaskState.RUNNING: // or 'running'
              console.log('Upload is running')
              break
          }
        },
        (error) => {
          console.log(error)
          db.doc(`/experiences/${doc.id}`).delete()
          alert('upload failed')
          // Handle unsuccessful uploads
        },
        () => {
          // Handle successful uploads on complete
          // For instance, get the download URL: https://firebasestorage.googleapis.com/...
          task.snapshot.ref.getDownloadURL().then((downloadURL) => {
            console.log('File available at', downloadURL)
            db.doc(`/experiences/${doc.id}`).update({
              imgUrl: downloadURL
            })
            close()
            location.reload()
          })
        }
      )
    })
    .catch((error) => {
      console.error(error)
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

//------------------------------------  編輯旅遊記事  --------------------------------
export const editExperience = (id, file) => {
  const document = db.doc(`/experiences/${id}`)
  document
    .get()
    .then((doc) => {
      if (!doc.exists) {
        alert('Experience not found')
      } else {
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
        document
          .update(output)
          .then((doc) => {
            const storageRef = firebase.storage().ref()
            const ref = storageRef.child(`${id}`)
            ref.delete().then(() => {
              // upload image
            }).catch((error) => {
              console.log(error)
            })
          })
      }
    })
}

//------------------------------------  刪除旅遊記事  --------------------------------
export const deleteExperience = (id) => {
  const document = db.doc(`/experiences/${id}`)
  document
    .get()
    .then((doc) => {
      if (!doc.exists) {
        alert('Experience not found')
      } else {
        return document.delete()
      }
    })
    .then(function(result){
      console.log(result)
      location.reload()
      
  })
}
