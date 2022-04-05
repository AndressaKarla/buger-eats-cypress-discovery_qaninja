// Importando uma classe
import cadastroPage from "../pages/CadastroPage"

// Importando um módulo
import cadastroFactory from '../factories/CadastroFactory'

// Suíte de testes
describe('Cadastro', () => { 
    it('Usuário deve se tornar entregador', function () {
        var entregador = cadastroFactory.entregador()

        cadastroPage.go()
        cadastroPage.preencherFormulario(entregador)
        cadastroPage.enviar()

        const mensagemEsperada = 'Recebemos os seus dados. Fique de olho na sua caixa de email, pois e em breve retornamos o contato.'
        cadastroPage.conteudoModalDeveConter(mensagemEsperada)
    })

    it('CPF incorreto', function () {
        var entregador = cadastroFactory.entregador()
        entregador.cpf = 'x12345678AA'

        cadastroPage.go()
        cadastroPage.preencherFormulario(entregador)
        cadastroPage.enviar()

        const mensagemEsperada = 'Oops! CPF inválido'
        cadastroPage.mensagemAlertaDeveConter(mensagemEsperada)
    })

    it('Email incorreto', function () {
        var entregador = cadastroFactory.entregador()
        entregador.email = 'a.s.getnada.com'

        cadastroPage.go()
        cadastroPage.preencherFormulario(entregador)
        cadastroPage.enviar()

        const mensagemEsperada = 'Oops! Email com formato inválido.'
        cadastroPage.mensagemAlertaDeveConter(mensagemEsperada)
    })

    context('Campos obrigatórios', function () {
        const mensagens = [
            { campo: 'nome', saida: 'É necessário informar o nome' },
            { campo: 'cpf', saida: 'É necessário informar o CPF' },
            { campo: 'email', saida: 'É necessário informar o email' },
            { campo: 'cep', saida: 'É necessário informar o CEP' },
            { campo: 'numero', saida: 'É necessário informar o número do endereço' },
            { campo: 'metodo_entrega', saida: 'Selecione o método de entrega' },
            { campo: 'cnh', saida: 'Adicione uma foto da sua CN' }
        ]

        before(function () {
            cadastroPage.go()
            cadastroPage.enviar()
        })

        mensagens.forEach(function (msg) {
            // Caso de teste dinâmico
            it(`${msg.campo} é obrigatório`, function () {
                cadastroPage.mensagemAlertaDeveConter(msg.saida)
            })
        })
    })
})