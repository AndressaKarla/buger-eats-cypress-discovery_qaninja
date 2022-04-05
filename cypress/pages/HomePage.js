// Nome de classes em javascript - PascalCase
class HomePage {
    go(){
        cy.visit('/') 
    }

    mensagemHomeDeveConter(mensagemEsperada){
        cy.get('#page-home main h1')
        .should('have.text', mensagemEsperada) 
    }
}

// Exportar classe já instanciada para poder importar na camada de testes na pasta "integration"
export default new HomePage; 