
import telaInicialPage from "../../support/pageObjects/telaInicial.page";

describe('Concluir itens na minha lista de To Do', () => {
    beforeEach(()=>{
        cy.visit('/')

        var toDoItens = ["Item_1", "Item_2", "Item_3"]
        
        toDoItens.forEach(function(item, indice, array){
            telaInicialPage.inputText(item)
        })
    })

    it('Concluir item na lista',()=>{
        telaInicialPage.concludeItem()
    })
    
      
});