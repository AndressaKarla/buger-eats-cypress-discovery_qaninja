var faker = require('faker')
var cpf = require('gerador-validador-cpf')

export default {
    entregador: function() {
        var primeiroNome = faker.name.firstName()
        var ultimoNome = faker.name.lastName()
        var email = faker.internet.email(primeiroNome)
        var cpf_gerado = cpf.generate()

        var dados = {
            nome: `${primeiroNome} ${ultimoNome}`,
            cpf: `${cpf_gerado}`,
            email: `${email}`,
            whatsapp: '44999999999',
            endereco: {
                'cep': '04534011',
                'rua': 'Rua Joaquim Floriano',
                'numero': '1000',
                'complemento': 'Ap 142',
                'distrito': 'Itaim Bibi',
                'cidade_uf': 'São Paulo/SP'
            },
            metodo_entrega: 'Moto',
            cnh: '/images/cnh-digital.jpg'
        }

        return dados
    }
}