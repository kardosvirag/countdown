console.log('server is starting...');

// import express
const express = require('express');
const app = express();
const server = app.listen(3000, listening);  // arrow funktion ---->      app.listen(3000, () => console.log('listening...'));

function listening(){
  console.log('listening...')
}

// folder name
app.use(express.static('countdown'))

