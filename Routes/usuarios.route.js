const express = require('express');
const router = express();

const {getUsers,getUser,getUserName, createUsers, updateUsers, updateUsersPassword, inactivateUsers} = require('../Controllers/usuarios.controller');

//rutas de CRUD sobre tabla USUARIOS EN BD EN LA NUBE
router.get('/all',getUsers);
router.post('/user',getUser)
router.post('/userName/',getUserName)
router.post('/create', createUsers);
router.put('/updateUsers/:id', updateUsers);
router.put('/updateUsersPassword', updateUsersPassword);
router.put('/inactivateUsers', inactivateUsers);

module.exports = router;