const bodyParser = require('body-parser');
const express = require('express');
const app = express();
const server = require('http').createServer(app);
const io = require("socket.io")(server);


const mongoose = require('mongoose');
require('dotenv').config();
const helmet = require('helmet');
const blogRouter = require("./routes/BlogRoutes");
var path = require('path');





app.set('port', process.env.PORT || 3000);

app.use(helmet());


mongoose.set('strictQuery', false);
main().catch(err => console.log(err));

async function main() {
  await mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => console.log('conectado a MongoDbAtlas..'))
  .catch((error) => console.error(error));
};





app.use(express.json({extended: true}));
app.use(express.urlencoded()); 
app.use(bodyParser.json()); 
app.use(express.static(path.join(__dirname, '/public')));
app.use("/api/blogs", blogRouter);



io.on('connection', function(socket) {

  console.log('nuevo usuario conectado..');

  
  socket.on('disconnect', () => {
    console.log('Un usuario se ha desconectado..');
  });

  socket.on('message', function(message){
    io.emit('message', message);
  });

  socket.on('user', function(mje){
    console.log('user recibido..');
    io.emit('user', mje);
  });

});



server.listen(app.get('port'), () => {
  console.log('Servidor corriendo en el puerto: ', app.get('port'));
});



