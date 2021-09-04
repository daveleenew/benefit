/*
 * Developer by MRC team on 2021-06-07 19:36:30.
 * Last modified 2021-06-07 19:36:29.
 * Copyright (c) 2021 MRC. All rights reserved.
 */

// docs see:
// https://firebase.flutter.dev/docs/messaging/usage

importScripts("https://www.gstatic.com/firebasejs/8.6.1/firebase-app.js");
importScripts("https://www.gstatic.com/firebasejs/8.6.1/firebase-messaging.js");

// Initialize Firebase
if (!firebase.isInitialized) {
    firebase.initializeApp({
        apiKey: "AIzaSyDv3JPqxCbrumaDBHLSfkfHknCs_p_kE28",
        authDomain: "mrc-benefits-project.firebaseapp.com",
        projectId: "mrc-benefits-project",
        storageBucket: "mrc-benefits-project.appspot.com",
        messagingSenderId: "605088415754",
        appId: "1:605088415754:web:03c2d04c5aed2c4feb5ff3",
        measurementId: "G-B718T9LKTV"
    });
}

// noinspection JSUnresolvedFunction
const messaging = firebase.messaging();

// Web requires you to register a JavaScript Service Worker which runs in the background.
//
// Unfortunately we haven't yet been able to establish a proper way of communicating with the Service Worker and Flutter applications.
// Right now, all web background code must be executed in the JavaScript Service Worker file.
//
// Optional:
messaging.onBackgroundMessage((payload) => {
    console.log('[firebase-messaging-sw.js] Received background message ', payload);
    // Customize notification here
    const notificationTitle = 'Background Message Title';
    const notificationOptions = {
        body: 'Background Message body.',
        icon: '/firebase-logo.png'
    };

    self.registration.showNotification(notificationTitle, notificationOptions);
});