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
  // Customize notification here only if it's a data message
  if (!payload.notification && payload.data) {
    const notificationTitle = payload.data.title || 'Notification';
    const notificationOptions = {
      body: payload.data.body,
      icon: payload.data.icon || '/favicon.ico'
    };
    self.registration.showNotification(notificationTitle, notificationOptions);
  }
});
