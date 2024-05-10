class Course {
    //construtor da classe
    constructor(){
        this.courses = [];//banco de cursos em forma de vetor
    }
    //Retorna todos os cursos
    getAllCourses(){
        return this.courses;
    }
    //criar um curso
    createCourse(name, description){
        const id = `c${this.courses.length+1}`; //Simulando um id único
        const newCourse = {id, name, description};
        this.courses.push(newCourse);
        return newCourse;
    }
    //buscar um curso
    getCourseById(id){
        const courseResult = this.courses.find(course => course.id === id)
    }
    //Função deletar - precisamos de um id
    deleteCourse(id){
        const courseIndex = this.findIndex(course => course.Id === id);
        if(courseIndex !== -1){
            this.courses.splice(courseIndex, 1);
            return true;
        }
        return false;
    }
    //Função atualizar registro
    updateCourse(id, name, description){
        const courseIndex = this.courses.findIndex(course => course.id === id);
        if(courseIndex !== -1){
            this.courses[courseIndex].name = name;
            this.courses[courseIndex].description = description;
            return this.courses[courseIndex];
        }
        return null
    }
}
module.exports = Course;