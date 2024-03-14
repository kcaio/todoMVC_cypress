
import telaInicialPage from "../../support/pageObjects/telaInicial.page";

describe('Validar os filtros da aplicação após adição de itens', () => {
    beforeEach(()=>{
        cy.visit('/')

        var toDoItens = ["Item_1", "Item_2", "Item_3"]
        
        toDoItens.forEach(function(item, indice, array){
            telaInicialPage.inputText(item)
        })

        telaInicialPage.concludeItem()
    })

    it('Filtrar itens Ativos da lista',()=>{
        telaInicialPage.filterActiveItem()
        telaInicialPage.filterAllItem()
        telaInicialPage.filterCompletedItem()
    })
    
      
});
