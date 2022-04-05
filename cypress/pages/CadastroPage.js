// Nome de classes em javascript - PascalCase
class CadastroPage {
    go(){
        cy.visit('/') 

        cy.get('a[href="/deliver"]').click()
        cy.get('#page-deliver form h1').should('have.text', 'Cadastre-se para  fazer entregas')
    }

    preencherFormulario(entregador){
        cy.get('input[name="fullName"]').type(entregador.nome)
        cy.get('input[name="cpf"]').type(entregador.cpf)
        cy.get('input[name="email"]').type(entregador.email)
        cy.get('input[name="whatsapp"]').type(entregador.whatsapp)

        cy.get('input[name="postalcode"]').type(entregador.endereco.cep)
        cy.get('input[type=button][value="Buscar CEP"]').click()

        cy.get('input[name="address-number"]').type(entregador.endereco.numero)
        cy.get('input[name="address-details"]').type(entregador.endereco.complemento)
        
        cy.get('input[name="address"]').should('have.value', entregador.endereco.rua)
        cy.get('input[name="district"]').should('have.value', entregador.endereco.distrito)
        cy.get('input[name="city-uf"]').should('have.value', entregador.endereco.cidade_uf)

        cy.contains('.delivery-method li', entregador.metodo_entrega).click()
        cy.get('input[accept^="image"]').attachFile(entregador.cnh) 
    }

    enviar(){
        cy.get('form button[type="submit"]').click()
    }

    conteudoModalDeveConter(mensagemEsperada){
        cy.get('.swal2-container .swal2-html-container')
        .should('have.text', mensagemEsperada)
    }

    mensagemAlertaDeveConter(mensagemEsperada){
        cy.contains('.alert-error', mensagemEsperada).should('be.visible')
    }
}

// Exportar classe já instanciada para poder importar na camada de testes na pasta "integration"
export default new CadastroPage; 