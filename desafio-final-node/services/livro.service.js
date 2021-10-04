import LivroRepository from "../repositories/livro.repository.js";
import LivroInfoRepository from "../repositories/livroInfo.repository.js";

async function createLivro(livro){
    return await LivroRepository.insertLivro(livro);
}

async function getLivros(order,field){
    return await LivroRepository.getLivros(order,field);
}

async function getLivro(id){
    return await LivroRepository.getLivro(id);
}

async function updateLivro(livro){
    return await LivroRepository.updateLivro(livro);
}

async function deleteLivro(id){
    return await LivroRepository.deleteLivro(id);
}

// MONGODB:
async function createLivroInfo(livroInfo){
    await LivroInfoRepository.createLivroInfo(livroInfo);
}

async function updateLivroInfo(livroInfo){
    await LivroInfoRepository.updateLivroInfo(livroInfo);
}

async function deleteLivroInfo(livroId) {
    await LivroInfoRepository.deleteLivroInfo(livroId);
}

export default{
    createLivro,
    getLivros,
    getLivro,
    updateLivro,
    deleteLivro,
    createLivroInfo,
    updateLivroInfo,
    deleteLivroInfo
}