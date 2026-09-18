// FIREBASE IMPORT

importScripts(
'https://www.gstatic.com/firebasejs/10.12.2/firebase-app-compat.js'
);

importScripts(
'https://www.gstatic.com/firebasejs/10.12.2/firebase-messaging-compat.js'
);


// FIREBASE CONFIG

firebase.initializeApp({

apiKey: "AIzaSyBMsHtZfM8ZTN_nY_G3g4rHr55--r9Sp0s",

authDomain: "sjam-e-tuntutan.firebaseapp.com",

projectId: "sjam-e-tuntutan",

storageBucket: "sjam-e-tuntutan.firebasestorage.app",

messagingSenderId: "660145662983",

appId: "1:660145662983:web:5da13e032b97842a504ea2"

});


const messaging = firebase.messaging();


// BACKGROUND NOTIFICATION

messaging.onBackgroundMessage((payload)=>{


console.log(
"📢 Background Message:",
payload
);


self.registration.showNotification(

payload.notification.title || "SJAM Krew",

{

body:
payload.notification.body || "Tugasan baru",

icon:
"https://lh3.googleusercontent.com/d/1cPsr9IwF9IwydvnbG7JwZzfRPCma5fd3",

badge:
"https://lh3.googleusercontent.com/d/1cPsr9IwF9IwydvnbG7JwZzfRPCma5fd3"

}

);

});


// SERVICE WORKER CONTROL

const CACHE_NAME = "sjam-krew-v2";


self.addEventListener(
"install",
event=>{

self.skipWaiting();

});


self.addEventListener(
"activate",
event=>{


event.waitUntil(

caches.keys().then(keys=>{

return Promise.all(

keys.map(key=>caches.delete(key))

);

})

);


self.clients.claim();


});
