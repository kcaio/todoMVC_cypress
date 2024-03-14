
/*
O "Dado" ou "Given" do Gherkin, no Cypress é utilizado como:
Before - Antes do Primeiro Teste
Before Each - Antes de cada Teste

Para uma estrutura de repetição, o FOR EACH pode funcionar para alguns casos;
*/
import telaInicialPage from "../../support/pageObjects/telaInicial.page";

describe('Adicionar itens na minha lista de To Do', () => {
    beforeEach(()=>{
        cy.visit('/')
    })
    it('Adicionar um item na lista', () => {
        telaInicialPage.inputText("Caio Torres")
      })

    it('Adicionar vários itens na lista',()=>{
        var toDoItens = ["Item_1", "Item_2", "Item_3"]
        toDoItens.forEach(function(item, indice, array){
            telaInicialPage.inputText(item)
        })
    })
    
      
});