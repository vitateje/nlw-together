import { Request, Response, NextFunction } from "express";
import { UsersRepositories } from "../repositories/UsersRepositories";
import { getCustomRepository } from "typeorm";

// Middleware para verificar se o usuário pode acessar os itens
function checkUserItems(req: Request, res, next) {

    console.log(req[0])

    const test = "f8f8c2a3-14b1-4510-884a-7288de871866"
    // Verifica se o usuário está autenticado
    // if (!req[0]) {
    //     return res.status(401).json({ message: 'Usuário não autenticado' });
    // }

    // Verifica se o ID do usuário corresponde ao ID associado ao item
    const itemId = req.user_id; // Supondo que o ID do item está nos parâmetros da URL

    const itemTest = "f8f8c2a3-14b1-4510-884a-7288de871866"

    const usersRepositories = getCustomRepository(UsersRepositories);

    const user  = usersRepositories.findOne(itemTest);


    // const item = getItemFromDatabase(itemId); // Função para recuperar o item do banco de dados

    if (!user) {
        return res.status(404).json({ message: 'Item não encontrado' });
    }

    if (itemTest !== req[0].id) {
        return res.status(403).json({ message: 'Você não tem permissão para acessar este item' });
    }

    // Se o usuário tiver permissão, passa para a próxima função
    next();
}

export { checkUserItems }