const socket = io.connect('http://localhost:3000')

const sender = document.querySelector('.sender')
const message = document.querySelector('.message')
const sendBtn = document.querySelector('.send')
const output = document.querySelector('.output')
const feedback = document.querySelector('.feedback')

sendBtn.addEventListener('click', () => {
    socket.emit('chat', {
        message: message.value,
        sender: sender.value
    })
})

socket.on('chat', data => {
    feedback.innerHTML += '<p><strong>' + data.sender + ' : </strong></p>' + data.message
})

