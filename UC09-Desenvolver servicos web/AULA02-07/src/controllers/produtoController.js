const Produto = require('../models/Produto');

const ProdutoController = {
    async listarProdutos(req, res){
        try{
            const produtos = await Produto.findAll();
            res.json(produtos);
        }catch(error){
            res.status(500).json({error: error.message});
        }  
    },
    async criarProduto(req, res){
        try{
            const produto = await Produto.create(req.body);
            res.status(201).json(produto);
        }catch(error){
            res.status(500).json({error: error.message});
        }
    },
    async atualizarProduto(req, res){
        try{
            const {id} = req.params;
            const {update} = await Produto.update(req.body, {
                where:{id}
            });
            if(update){
                const updateProduto = await Produto.findOne({where: {id}});
                res.status(200).json(updateProduto);
            }else{
                res.status(404).json({error: "Produto não encontrada"});
            }
        }catch(error){
            res.status(500).json({error: "Erro ao atualizar Produto"});
        }
    }

}
module.exports = ProdutoController;
