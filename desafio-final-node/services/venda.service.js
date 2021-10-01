import VendaRepository from "../repositories/venda.repository.js";

async function createVenda(venda){
    return await VendaRepository.insertVenda(venda);
}
async function getVendas(order, field){
    return await VendaRepository.getVendas(order, field);
}
// async function getVenda(id){
//     return await VendaRepository.getVenda(id);
// }
async function getVendaByClienteId(id){
    return await VendaRepository.getVendaByClienteId(id);
}

async function updateVenda(venda){
    return await VendaRepository.updateVenda(venda);
}
async function deleteVenda(id){
    return await VendaRepository.deleteVenda(id);
}

export default{
    createVenda,
    getVendas,
    // getVenda,
    getVendaByClienteId,
    updateVenda,
    deleteVenda
}