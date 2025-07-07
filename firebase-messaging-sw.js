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

self.addEventListener('push', function(event) {
  const data = event.data.json();
  console.log("📩 Push received in service worker:", data);

  // Show system notification
  self.registration.showNotification(data.notification.title, {
    body: data.notification.body,
    icon: 'icon-192.png'
  });

  // Send message to open client(s)
  self.clients.matchAll({ type: 'window', includeUncontrolled: true }).then(function(clients) {
    for (const client of clients) {
      client.postMessage(data.notification);
    }
  });
});
