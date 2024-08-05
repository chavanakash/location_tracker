// const socket = io();

// if (navigator.geolocation) {
//     navigator.geolocation.watchPosition(
//         (position) => {
//             const { latitude, longitude } = position.coords;
//             socket.emit("send-location", { latitude, longitude });
//         },
//         (error) => {
//             console.error(error);
//         },

//         {
//             enableHighAccuracy: true,
//             maximumAge: 0,
//             timeout: 2500
//         }
//     );
// }

// const map = L.map("map").setView([0, 0], 10);

// L.tileLayer("http://a.tile.openstreetmap.org/{z}/{x}/{y}.png").addTo(map);

// const markers = {};
// socket.on("receive-location", (data) => {
//     const { id, latitude, longitude } = data;
//     setView([latitude, longitude], 15);
//     if (markers[id]) {
//         markers[id].setLatLng([latitude, longitude]);
//     }
//     else {
//         markers[id] = L.marker([latitude, longitude]).addTo(map);

//     }
// })


//chat gpt code

document.addEventListener('DOMContentLoaded', () => {
    const socket = io();

    if (navigator.geolocation) {
        navigator.geolocation.watchPosition(
            (position) => {
                const { latitude, longitude } = position.coords;
                socket.emit("send-location", { latitude, longitude });
            },
            (error) => {
                console.error(error);
            },
            {
                enableHighAccuracy: true,
                maximumAge: 0,
                timeout: 2500
            }
        );
    }

    const map = L.map("map").setView([0, 0], 10);

    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png").addTo(map);

    const markers = {};
    socket.on("receive-location", (data) => {
        const { id, latitude, longitude } = data;
        map.setView([latitude, longitude], 15);
        if (markers[id]) {
            markers[id].setLatLng([latitude, longitude]);
        } else {
            markers[id] = L.marker([latitude, longitude]).addTo(map);
        }
    });
});
