
let button = document.getElementById('button')
let toasts = document.getElementById('toasts')

let messages =[
    'Message One',
    'Message Two',
    'Message Three',
    'Message Four',
]

let types=['info', 'success', 'error']

button.addEventListener('click', ()=> creatNotification())

 function creatNotification(message = null, type = null){
     let notif = document.createElement('div')
     notif.classList.add('toast')
     notif.classList.add(type ? type : getRandomType())

     notif.innerText = message ? message : getRandomMessage()

     toasts.appendChild(notif)

     setTimeout(() => {
         notif.remove()
     }, 3000);
 }
 
 function getRandomMessage(){
     return messages[Math.floor(Math.random() * messages.length) ]
 }
 function getRandomType(){
     return types[Math.floor(Math.random() * types.length) ]
 }