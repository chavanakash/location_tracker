// const express = require('express');
// const socketio = require('socket.io');
// const http = require('http');
// const path = require("path");

// const app = express();
// const server = http.createServer(app);
// const io = socketio(server);

// io.on("connection", function (socket) {
//     console.log("connected" + socket.id);
//     socket.on("send-location", function (data) {
//         io.emit("receive-location", {
//             id: socket.id,
//             ...data,
//         });

//     });
//     socket.on("disconnect", () => {
//         console.log("User disconnected: " + socket.id);
//     });
// });




// app.set("view engine", "ejs");
// app.use(express.static(path.join(__dirname, 'public')));



// app.get('/', (req, res) => {
//     res.render('index');
// });

// server.listen(5000, () => { console.log(`server is listening on port:${5000} & server started`) });

//chat gpt code

const express = require('express');
const socketio = require('socket.io');
const http = require('http');
const path = require("path");

const app = express();
const server = http.createServer(app);
const io = socketio(server);

io.on("connection", function (socket) {
    console.log("connected " + socket.id);
    socket.on("send-location", function (data) {
        io.emit("receive-location", {
            id: socket.id,
            ...data,
        });
    });
    socket.on("disconnect", () => {
        console.log("User disconnected: " + socket.id);
    });
});

app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
    res.render('index');
});

server.listen(5001, '0.0.0.0', () => {
    console.log(`Server is listening on port: 5001 & server started`);
});

