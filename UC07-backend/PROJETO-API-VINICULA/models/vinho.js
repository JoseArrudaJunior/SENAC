// Declara uma variável global para simular a geração de IDs únicos para os Vinhos
let chave = 1;

// Define a classe Vinho para representar Vinhos e suas operações
class Vinho {
    // Construtor da classe Vinho
    constructor() {
        this.vinhos = []; // Inicializa o banco de Vinhos como um array vazio
    }

    // Método para retornar todos os Vinhos
    getAllVinhos() {
        return this.vinhos; // Retorna todos os Vinhos armazenados
    }

    // Método para criar um novo Vinho com o nome e a descrição fornecidos
    createVinho(name, description) {
        const id = `c${chave++}`; // Gera um ID único para o novo Vinho
        const newVinho = { id, name, description }; // Cria um novo objeto de Vinho
        this.vinhos.push(newVinho); // Adiciona o novo curso ao banco de Vinhos
        return newVinho; // Retorna o novo Vinho criado
    }

    // Método para buscar um curso pelo ID fornecido
    getVinhoById(id) {
        const vinhoResult = this.vinhos.find(vinho => vinho.id === id); // Busca um Vinho pelo ID
        return vinhoResult; // Retorna o Vinho encontrado (ou null se não encontrado)
    }

    // Método para deletar um curso pelo ID fornecido
    deleteVinho(id) {
        const vinhoIndex = this.vinhos.findIndex(vinho => vinho.id === id); // Encontra o índice do Vinho no array
        if (vinhoIndex !== -1) { // Se o Vinho for encontrado
            this.vinhos.splice(vinhoIndex, 1); // Remove o Vinho do array
            return true; // Retorna true para indicar que o Vinho foi deletado com sucesso
        }
        return false; // Retorna false se o Vinho não for encontrado
    }

    // Método para atualizar o nome e a descrição de um Vinho pelo ID fornecido
    updateVinho(id, name, description) {
        const vinhoIndex = this.vinhos.findIndex(vinho => vinho.id === id); // Encontra o índice do Vinho no array
        if (vinhoIndex !== -1) { // Se o Vinho for encontrado
            this.vinhos[vinhoIndex].name = name; // Atualiza o nome do Vinho
            this.vinhos[vinhoIndex].description = description; // Atualiza a descrição do Vinho
            return this.vinhos[vinhoIndex]; // Retorna o Vinho atualizado
        }
        return null; // Retorna null se o curso não for encontrado
    }
}

// Exporta a classe Course para ser utilizada em outros arquivos
module.exports = Vinho;