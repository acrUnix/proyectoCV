


const socket = io.connect('http://localhost:3000', {forceNew: true});

      const messages = document.getElementById('messages');
      const messageInput = document.getElementById('message-input');
      const sendButton = document.getElementById('send-button');


      sendButton.addEventListener('click', () => {
        const message = messageInput.value;
        socket.emit('message', message);
        messageInput.value = '';
      });

      socket.on('message', (message) => {
        const messageElement = document.createElement('div');
        messageElement.innerText = message;
        messages.appendChild(messageElement);
      });








function datos(){

fetch("http://localhost:3000/api/blogs")
.then(response => {
        if (response.ok) {
            return response.json();
        }
    })
.then((data) => {crearConec(data);})
.catch((err) => console.log(err))

}

datos();

function crearConec(datos){

const listaUl = document.getElementById('listaUl');

        const datjson = datos['user'];

        for (dat in datjson){

            console.log(datjson[dat]['name'] + '   ' + datjson[dat]['age']);

            let myItem = (datjson[dat]['name'] +'   '+ datjson[dat]['age']);

        const listItem = document.createElement('li');
        const listText = document.createElement('span');

        listText.textContent = myItem;

        listItem.appendChild(listText);
        listaUl.appendChild(listItem);
    }

}


 



function submitForm(e) {

    function emitir(data){
        socket.emit('user', 'un usuario se ha registrado');

        socket.on('user', function(mje){
        const parrafo = document.getElementById('user');
        parrafo.textContent = mje;
    });
};

e.preventDefault();

const enviar = document.getElementById('enviar');
const form = document.getElementById('form');
const name = document.getElementById('name').value;
const age = document.getElementById('age').value;
const email = document.getElementById('email').value;


    fetch("http://localhost:3000/api/blogs/user", {
        method: 'POST',
        body: JSON.stringify({name: name, age: age, email: email}),
        headers: {
          "Content-Type": "application/json"
        }
    })

    .then(res => res.json())
    .then(data => console.log(data))
    .then(data => emitir(data))
    .catch(function (err) { 
            console.log(err);
    })


}



enviar.addEventListener('click', submitForm);



