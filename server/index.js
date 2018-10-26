const express = require ('express');
const bodyParser = require('body-parser');
const app = express ();
const controllers = require('./controllers/controllers')
const port = 6969;

app.use(bodyParser.json());

app.get('/api/tasks', controllers.getTasks);
app.post('/api/tasks', controllers.addTask);
app.put('/api/tasks/:id', controllers.updateTask);
app.delete('/api/tasks/:id', controllers.deleteTask);

app.listen(port, () => {
    console.log('dad? ', port);
})