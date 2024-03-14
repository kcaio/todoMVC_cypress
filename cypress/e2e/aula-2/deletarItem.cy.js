
import telaInicialPage from "../../support/pageObjects/telaInicial.page";

describe('Excluir item da lista', () => {
    beforeEach(()=>{
        cy.visit('/')

        var toDoItens = ["Item_1", "Item_2", "Item_3"]
        
        toDoItens.forEach(function(item, indice, array){
            telaInicialPage.inputText(item)
        })

        telaInicialPage.concludeItem()
    })

    it('Excluir item da lista',()=>{
        telaInicialPage.deleteItem()
    })
    
      
});
