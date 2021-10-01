import LivroRepository from "../repositories/livro.repository.js";

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


export default{
    createLivro,
    getLivros,
    getLivro,
    updateLivro,
    deleteLivro
}