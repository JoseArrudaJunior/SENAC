const Categoria = require('../models/Categoria');

const CategoriaController = {
    async listarCategorias(req, res){
        try{
            const categorias = await Categoria.findAll();
            res.json(categorias);
        }catch(error){
            res.status(500).json({error: error.message});
        }  
    },
    async criarCategoria(req, res){
        try{
            const categoria = await Categoria.create(req.body);
            res.status(201).json(categoria);
        }catch(error){
            res.status(500).json({error: error.message});
    }
    },
    async atualizarCategoria(req, res){
        try{
            const {id} = req.params;
            const {update} = await Categoria.update(req.body, {
                where:{id}
            });
            if(update){
                const updateCategoria = await Categoria.findOne({where: {id}});
                res.status(200).json(updateCategoria);
            }else{
                res.status(404).json({error: "Categoria não encontrada"});
            }
        }catch(error){
            res.status(500).json({error: "Erro ao atualizar Categoria"});
        }
    }
}
module.exports = CategoriaController;



