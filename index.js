import express from 'express';
import exphbs from 'express-handlebars';
import conn from './db/conn.js';
import dotenv from 'dotenv';
import { Sequelize } from 'sequelize';
import User from './model/User.js';
import Address from './model/Address.js';

// Carregar variáveis de ambiente
dotenv.config();

const app = express();
app.engine(
  'handlebars',
  exphbs.engine({
    layoutsDir: 'views/layout',
    defaultLayout: 'main',
  })
);
app.set('view engine', 'handlebars');

app.use(
  express.urlencoded({
    extended: true,
  })
);

app.use(express.json());

app.use(express.static('public'));

app.get('/', function (req, res) {
  User.findAll({ raw: true })
    .then((users) => {
      console.log(users);
      res.render('home', { users: users });
    })
    .catch((error) => {
      console.log(error);
      res.render('home', { users: [] });
    });
});

app.get('/users/create', function (req, res) {
  res.render('userscreate');
});

app.post('/users/create', function (req, res) {
  const name = req.body.name;
  const occupation = req.body.occupation;
  let newsletter = req.body.newsletter;

  if (newsletter == 'on') {
    newsletter = true;
  } else {
    newsletter = false;
  }

  User.create({ name, occupation, newsletter })
    .then(() => {
      console.log('✅ Usuário criado com sucesso!');
      res.redirect('/');
    })
    .catch((error) => {
      console.log('❌ Erro ao criar usuário:', error);
      res.redirect('/users/create');
    });
});

app.get('/users/:id', function (req, res) {
  const id = req.params.id;

  User.findOne({
    raw: true,
    where: {
      id: id,
    },
  })
    .then((user) => {
      console.log(user.name);
      res.render('userview', { user });
    })
    .catch((err) => console.log(err));
});

app.post('/users/delete/:id', function (req, res) {
  const id = req.params.id;

  User.destroy({ where: { id: id } })
    .then((user) => {
      console.log('user remove: ' + id);
      res.redirect('/');
    })
    .catch((err) => {
      console.log('❌ Erro ao deletar usuário:', err);
      res.redirect('/');
    });
});

app.get('/users/edit/:id', function (req, res) {
  const id = req.params.id;

  User.findOne({
    include: Address,
    where: {
      id: id,
    },
  })
    .then((user) => {
      res.render('useredit', { user: user.get({ plain: true }) });
    })
    .catch((err) => console.log(err));
});

app.post('/users/edit/:id', function (req, res) {
  const id = req.params.id;
  const name = req.body.name;
  const occupation = req.body.occupation;
  let newsletter = req.body.newsletter;

  if (newsletter == 'on') {
    newsletter = true;
  } else {
    newsletter = false;
  }

  User.update({ name, occupation, newsletter }, { where: { id: id } })
    .then(() => {
      console.log('✅ Usuário atualizado com sucesso!');
      res.redirect('/');
    })
    .catch((error) => {
      console.log('❌ Erro ao atualizar usuário:', error);
      res.redirect(`/users/edit/${id}`);
    });
});

app.post('/address/create', function (req, res) {
  const UserId = req.body.UserId;
  const street = req.body.street;
  const number = req.body.number;
  const city = req.body.city;

  const address = {
    street,
    number,
    city,
    UserId,
  };

  Address.create(address)
    .then(res.redirect(`/users/edit/${UserId}`))
    .catch((err) => console.log(err));
});

app.post('/address/delete', function (req, res) {
  const id = req.body.id;
  const UserId = req.body.UserId;
  Address.destroy({
    where: { id: id },
  });
  res.redirect(`/users/edit/${UserId}`);
});
const PORT = process.env.PORT || 3000;

conn
  .sync()
  //.sync({force: true}) //recria o banco
  .then(() => {
    app.listen(PORT);
    console.log(`Servidor rodando na porta ${PORT}`);
    console.log(`Acesse: http://localhost:${PORT}`);
  })
  .catch((err) => console.log(err));
