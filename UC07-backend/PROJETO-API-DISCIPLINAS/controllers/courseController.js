// Importa o modelo de curso e o inicializa
const Course = require('../models/course');
const courseModel = new Course();

// Importa o módulo 'path' para lidar com caminhos de arquivo
const path = require('path');

// Define a classe CourseController para gerenciar operações relacionadas aos cursos
class CourseController {
    // Método para obter todos os cursos
    getAllCourses(req, res) {
        const courses = courseModel.getAllCourses(); // Obtém todos os cursos do modelo
        res.json(courses); // Retorna os cursos em formato JSON
    }

    // Método para criar um novo curso
    createCourse(req, res) {
        const { name, description } = req.body; // Extrai o nome e a descrição do corpo da solicitação
        const newCourse = courseModel.createCourse(name, description); // Cria um novo curso com os dados fornecidos
        //res.status(201).json(newCourse); // Retorna o novo curso em formato JSON com o código de status 201 (Created)
        res.status(201).redirect('/'); // Redireciona para a página inicial após a criação do curso
    }
    
    // Método para obter um curso por ID
    getCourseById(req, res) {
        const courseId = req.params.id; // Obtém o ID do curso dos parâmetros da solicitação
        const course = courseModel.getCourseById(courseId); // Obtém o curso com o ID fornecido
        if (!course) {
            return res.status(404).json({ msg: 'Course not found' }); // Retorna um erro se o curso não for encontrado
        }
        res.json(course); // Retorna o curso encontrado em formato JSON
    }

    // Método para excluir um curso por ID
    deleteCourse(req, res) {
        const courseId = req.params.id; // Obtém o ID do curso dos parâmetros da solicitação
        const courseDeleted = courseModel.deleteCourse(courseId); // Exclui o curso com o ID fornecido
        if (!courseDeleted) {
            return res.status(404).json({ msg: 'Course not found' }); // Retorna um erro se o curso não for encontrado
        }
        //res.redirect('/'); // Redireciona para a página inicial após a exclusão do curso
        res.json({ msg: 'Course deleted sucessfully' }); // Retorna uma mensagem de sucesso em formato JSON
    }

    // Método para exibir o formulário de edição de um curso
    formEditCourse(req, res) {
        const courseId = req.params.id; // Obtém o ID do curso dos parâmetros da solicitação
        res.sendFile(path.join(__dirname, '../public/html', 'edit.html')); // Envia o arquivo de formulário de edição HTML
    }

    // Método para atualizar um curso por ID
    updateCourse(req, res) {
        const courseId = req.params.id; // Obtém o ID do curso dos parâmetros da solicitação
        const { name, description } = req.body; // Extrai o novo nome e descrição do corpo da solicitação
        const courseUpdate = courseModel.updateCourse(courseId, name, description); // Atualiza o curso com os novos dados
        if (!courseUpdate) {
            return res.status(404).json({ msg: 'Course not found' }); // Retorna um erro se o curso não for encontrado
        }
        res.json({ courseUpdate }); // Retorna o curso atualizado em formato JSON
    }   
}

// Exporta uma instância da classe CourseController
module.exports = new CourseController();
