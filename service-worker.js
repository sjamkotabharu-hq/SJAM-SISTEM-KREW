const CACHE_NAME = "sjam-krew-v2";


// INSTALL

self.addEventListener(
"install",
event=>{

self.skipWaiting();

});


// ACTIVATE

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

data:{
url:"https://sjamkotabharu-hq.github.io/SJAM-SISTEM-KREW/"
}

}

);


});


// ==============================
// KLIK NOTIFICATION
// ==============================

self.addEventListener(
"notificationclick",
event=>{


event.notification.close();


event.waitUntil(

clients.matchAll({

type:"window",
includeUncontrolled:true

})

.then(clientList=>{


for(let client of clientList){


if(client.url && "focus" in client){


client.focus();


client.postMessage({

action:"bukaJadual"

});


return;

}


}


// jika tiada page terbuka

if(clients.openWindow){


return clients.openWindow(

event.notification.data.url

);


}


})


);


});


// SERVICE WORKER CONTROL

const CACHE_NAME = "sjam-krew-v3";

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
