importScripts('https://www.gstatic.com/firebasejs/10.11.1/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/10.11.1/firebase-messaging-compat.js');

firebase.initializeApp({
  apiKey: "AIzaSyCsiQ5WSJj4RtobDbfu8iYI55y0ACrxoos",
  authDomain: "gen-lang-client-0608072193.firebaseapp.com",
  projectId: "gen-lang-client-0608072193",
  storageBucket: "gen-lang-client-0608072193.firebasestorage.app",
  messagingSenderId: "921977986260",
  appId: "1:921977986260:web:a840945d2e5cbfc7bb2f41"
});

const messaging = firebase.messaging();

messaging.onBackgroundMessage((payload) => {
  console.log('[firebase-messaging-sw.js] Received background message ', payload);
  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
    icon: payload.notification.icon || '/favicon.ico'
  };

  self.registration.showNotification(notificationTitle, notificationOptions);
});
