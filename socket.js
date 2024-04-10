
const users = {};

const setupSocket = (io) => {

    io.on('connection', (socket) => {
        console.log('socket connection: ', socket.id);
        
        socket.on('new-user', (name, data) =>{
            console.log('new user: ', name);
            socket.nickName = name;
            users[name] = socket
        });

        socket.on('onNewDirection', (data) => {

        });

        socket.on('disconnect', (data) => {
            console.log('Disconet');
        });

    });

}

module.exports = {
    setupSocket
}