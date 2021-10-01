import LivroService from "../services/livro.service.js";

async function createLivro(req, res, next){
    try{
        let livro= req.body;
        if (!livro.nome || !livro.valor || !livro.estoque || !livro.autorId){
            throw new Error("O preenchimento de todos os campos são necessarios!");
        }
        livro= await LivroService.createLivro(livro);
        res.send(livro);
        logger.info(`POST /livro - ${JSON.stringify(livro)}`);
    }catch(err){
        next(err);
    }
}

async function getLivros(req, res, next){
    try{
        const order=req.query.order;
        const field=req.query.field;
        res.send( await LivroService.getLivros(order,field));
        logger.info(`GET /livro` + req.query.order);
    }catch(err){
        next(err);
    }
}

async function getLivro(req, res, next){
    try{
        res.send( await LivroService.getLivro(req.params.id));
        loggers.info(`GET /livro`);
    }catch(err){
        next(err);
    }
}

async function updateLivro(req, res, next){
    try{
        let livro=req.body;
        if (!livro.nome || !livro.valor || !livro.estoque || !livro.autorId){
            throw new Error("O preenchimento de todos os campos são necessarios!");
        }
        livro= await LivroService.updateLivro(livro);
        res.send(livro);
        logger.info(`PUT /livro - ${JSON.stringify(livro)}`);
    }catch(err){
        next(err);
    }
}

async function deleteLivro(req, res, next){
    try{
        await LivroService.deleteLivro(req.params.id);
        res.end();
        loggers.info(`DELETE /livro`);
    }catch(err){
        next(err);
    }
}




export default{
    createLivro,
    getLivros,
    getLivro,
    updateLivro,
    deleteLivro
}