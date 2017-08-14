exports = module.exports = function (app) {
  app.get('/users/', require('./controllers/userController').mostrar)
}
/*
exports = module.exports = function (app) {
  app.get('/users/', require('./views/Users/index').mostrar)
  app.post('/users/', require('./views/Users/index').ingresar)
  app.post('/users/listar/', require('./views/Users/index').listar)
  app.put('/users/', require('./views/Users/index').actualizar)
  app.delete('/users/', require('./views/Users/index').borrar)
  app.post('/users/:id', require('./views/Users/index').buscar)

  app.get('/appoinments/', require('./views/Appoinments/index').mostrar)
  app.post('/appoinments/', require('./views/Appoinments/index').ingresar)
  app.put('/appoinments/', require('./views/Appoinments/index').actualizar)
  app.delete('/appoinments/', require('./views/Appoinments/index').borrar)

  app.get('/appoTypes/', require('./views/AppointmentTypes/index').mostrar)
  app.post('/appoTypes/', require('./views/AppointmentTypes/index').ingresar)
  app.put('/appoTypes/', require('./views/AppointmentTypes/index').actualizar)
  app.delete('/appoTypes/', require('./views/AppointmentTypes/index').borrar)
}
*/
