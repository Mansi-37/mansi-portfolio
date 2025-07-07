// firebase-messaging-sw.js

importScripts("https://www.gstatic.com/firebasejs/10.12.0/firebase-app-compat.js");
importScripts("https://www.gstatic.com/firebasejs/10.12.0/firebase-messaging-compat.js");

firebase.initializeApp({
  apiKey: "AIzaSyA7kKNEC3mQIXrI_DLDTFvJBF_5QD3i5Xw",
  authDomain: "mansi-pwa.firebaseapp.com",
  projectId: "mansi-pwa",
  messagingSenderId: "1096969535516",
  appId: "1:1096969535516:web:b1a1ce87503f66e5f7dfd9"
});
const messaging = firebase.messaging();
