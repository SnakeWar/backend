const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes');
const cors = require('cors')

const app = express();

mongoose.connect('mongodb+srv://mayrcon:880120SW@omnistack-nkbha.mongodb.net/banco?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})

// app.get('/users', (req, res) => { //filtros
//     return res.json({idade: req.query.idade});
// });
// app.put('/users/id', (req, res) => {// edição e delete
//     return res.json({id: req.params.id});
// });
app.use(cors());
app.use(express.json());
app.use(routes);
// app.post('/users', (req, res) => {//req.body para requisição de criação e edição
//     return res.json( req.body );
// });

app.listen(3333);