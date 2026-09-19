// ==============================
// FIREBASE IMPORT
// ==============================

importScripts(
'https://www.gstatic.com/firebasejs/10.12.2/firebase-app-compat.js'
);

importScripts(
'https://www.gstatic.com/firebasejs/10.12.2/firebase-messaging-compat.js'
);

// ==============================
// FIREBASE CONFIG
// ==============================

firebase.initializeApp({

apiKey: "AIzaSyBMsHtZfM8ZTN_nY_G3g4rHr55--r9SpOs",

authDomain: "sjam-e-tuntutan.firebaseapp.com",

projectId: "sjam-e-tuntutan",

storageBucket: "sjam-e-tuntutan.appspot.com",

messagingSenderId: "660145662983",

appId: "1:660145662983:web:5da13e032b97842a504ea2"

});


const messaging = firebase.messaging();


// ==============================
// BACKGROUND NOTIFICATION
// ==============================

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
"icon.png",

badge:
"icon.png",

data:{
url:
"https://sjamkotabharu-hq.github.io/SJAM-SISTEM-KREW/"
}

}

);
