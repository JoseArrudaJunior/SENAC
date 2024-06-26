// Importa o controlador de curso para manipular as operações relacionadas aos cursos
const courseController = require('../controllers/courseController');

// Importa o framework Express
const express = require('express');

// Cria um novo roteador do Express
const router = express.Router();

// Define as rotas para lidar com diferentes operações de curso

// Rota para listar todos os cursos
router.get('/courses', courseController.homeCourse);
// Rota para listar todos os cursos
router.get('/courses/listar', courseController.getAllCourses);

// Rota para buscar um curso por ID
router.get('/courses/:id', courseController.getCourseById);

// Rota para cadastrar um novo curso
router.post('/courses/create', courseController.createCourse);

// Rota para atualizar um curso por ID
router.put('/courses/:id', courseController.updateCourse);

// Rota para deletar um curso por ID
router.delete('/courses/:id', courseController.deleteCourse);

// Rota para renderizar o formulário de edição de um curso
router.get('/courses/edit/:id', courseController.formEditCourse);

// Exporta o roteador para ser utilizado em outras partes da aplicação
module.exports = router;