import homePage from "../pages/HomePage"

describe('Home page', () => {
    it('App deve estar online', () => {
        homePage.go()

        const mensagemEsperada = 'Seja um parceiro entregador pela Buger Eats'
        homePage.mensagemHomeDeveConter(mensagemEsperada)
    })
})