import express from 'express';

const app = express();

app.use(express.json());

const users = 
[
  'Angel',
  'Fernando',
  'Mimi'
];

app.get('/users', (request, response) => {
  //console.log('Listagem de alunos');
  //return response.json(users);

  const search = String(request.query.search);

  const filteredUsers = search ? users.filter(user => user.includes(search)) : users;

  return response.json(filteredUsers);

});

app.get('/users/:id', (request, response) => {
  const id = Number(request.params.id);
  const user = users[id];

  

  return response.json(user);
});

app.post('/users', (request, response) => {
  /*const user = {
  name: 'Angel',
  email: 'angelica.rs@gmail.com'
};*/

const data = request.body;

const user = {
  name: data.name,
  email: data.email,
};

return response.json(user);
});

app.listen(3333);