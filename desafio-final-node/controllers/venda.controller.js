import VendaService from "../services/venda.service.js";

async function createVenda(req,res,next){
    try{
        let venda=req.body;
        if(!venda.valor || !venda.data || !venda.clienteId || !venda.livroId){
            throw new Error("O preenchimento de todos os campos são necessarios!");
        }
        venda= await VendaService.createVenda(venda);
        res.send(venda);
        logger.info(`POST /venda - ${JSON.stringify(venda)}`);
    }catch(err){
        next(err);
    }

}

async function getVendas(req,res,next){
    try{
        const order=req.query.order;
        const field=req.query.field;
        res.send(await VendaService.getVendas(order,field));
        logger.info(`GET /venda` + req.query.order)
    }catch(err){
        next (err);
    }
}

// async function getVenda(req,res,next){
//     try{
//         res.send(await VendaService.getVenda(req.params.id));
//         logger.info(`GET /venda`)
//     }catch(err){
//         next (err);
//     }
// }

async function getVendaByClienteId(req,res,next){
    try{
        res.send(await VendaService.getVendaByClienteId(req.params.id));
        logger.info(`GET /venda`)
    }catch(err){
        next (err);
    }
}

async function updateVenda(req,res,next){
    try{
        let venda=req.body
        if(!venda.valor || !venda.data || !venda.clienteId || !venda.livroId){
            throw new Error("O preenchimento de todos os campos são necessarios!");
        }
        venda= await VendaService.updateVenda(venda);
        res.send(venda);
        logger.info(`PUT /venda`)
    }catch(err){
        next (err);
    }
}

async function deleteVenda(req,res,next){
    try{
        await VendaService.deleteVenda(req.params.id);
        res.end();
        logger.info(`DELETE /venda`)
    }catch(err){
        next (err);
    }
}

export default{
    createVenda,
    getVendas,
    // getVenda,
    getVendaByClienteId,
    updateVenda,
    deleteVenda
}