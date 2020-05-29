const connection = require('../database/connection');

module.exports = {
    async cadaster(request, response) {
        const { nome, email, senha, telefone } = request.body;

        await connection('users').insert({
            nome,
            email,
            senha,
            telefone
        });

        return response.json('Cadastrado')

    },

    async login(request, response) {
        const { email, senha } = request.body;

        await connection('users')
            .where('email', '=', email, 'and', 'senha', '=', senha)
            .select('*')
            .first();

          return response.json();
    },
}
