// Declara uma variável global para simular a geração de IDs únicos para os cursos
let chave = 1;

// Define a classe Course para representar cursos e suas operações
class Course {
    // Construtor da classe Course
    constructor() {
        this.courses = []; // Inicializa o banco de cursos como um array vazio
    }

    // Método para retornar todos os cursos
    getAllCourses() {
        return this.courses; // Retorna todos os cursos armazenados
    }

    // Método para criar um novo curso com o nome e a descrição fornecidos
    createCourse(name, description) {
        const id = `c${chave++}`; // Gera um ID único para o novo curso
        const newCourse = { id, name, description }; // Cria um novo objeto de curso
        this.courses.push(newCourse); // Adiciona o novo curso ao banco de cursos
        return newCourse; // Retorna o novo curso criado
    }

    // Método para buscar um curso pelo ID fornecido
    getCourseById(id) {
        const courseResult = this.courses.find(course => course.id === id); // Busca um curso pelo ID
        return courseResult; // Retorna o curso encontrado (ou null se não encontrado)
    }

    // Método para deletar um curso pelo ID fornecido
    deleteCourse(id) {
        const courseIndex = this.courses.findIndex(course => course.id === id); // Encontra o índice do curso no array
        if (courseIndex !== -1) { // Se o curso for encontrado
            this.courses.splice(courseIndex, 1); // Remove o curso do array
            return true; // Retorna true para indicar que o curso foi deletado com sucesso
        }
        return false; // Retorna false se o curso não for encontrado
    }

    // Método para atualizar o nome e a descrição de um curso pelo ID fornecido
    updateCourse(id, name, description) {
        const courseIndex = this.courses.findIndex(course => course.id === id); // Encontra o índice do curso no array
        if (courseIndex !== -1) { // Se o curso for encontrado
            this.courses[courseIndex].name = name; // Atualiza o nome do curso
            this.courses[courseIndex].description = description; // Atualiza a descrição do curso
            return this.courses[courseIndex]; // Retorna o curso atualizado
        }
        return null; // Retorna null se o curso não for encontrado
    }
}

// Exporta a classe Course para ser utilizada em outros arquivos
module.exports = Course;
