
const socket = new WebSocket("ws://192.168.1.113:3000");
socket.onopen = () => {
    socket.send("Hello!");
};

socket.onmessage = (data) => {
    console.log(data);
};