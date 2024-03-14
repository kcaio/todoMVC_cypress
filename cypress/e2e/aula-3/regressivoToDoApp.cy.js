
import telaInicialPage from "../../support/pageObjects/telaInicial.page";

describe('Regressivo To Do App', () => {

    /*
    Teste de validação do "Placeholder" de inclusão de Itens a lista To Do    
    */
    context('Validar tela inicial',() =>{
        beforeEach(()=>{
            cy.visit('/')
          })

        it('Validar a área label de input de dados', () =>{
            telaInicialPage.checkInput('What needs to be done?')
        })
    })

    /*
    Validação de inclusão dos itens na lista To Do    
    */
    context('Validar inclusão de Itens',() =>{
        beforeEach(()=>{
            cy.visit('/')  
        })

        it('Adicionar Itens a lista', ()=>{
            //Inlcuindo Itens
            var toDoItens = ["Item_1", "Item_2", "Item_3"]
            toDoItens.forEach(function(item, indice, array){
                telaInicialPage.inputText(item)
            })
            //Validando quantidade de itens incluídos
            telaInicialPage.counterItem(3)
        })
    })

    /*
    Validação de conclusão de item na lista de To Do
    */
    context('Validar Conclusão de Itens',() =>{
        beforeEach(()=>{
            cy.visit('/')

            var toDoItens = ["Item_1", "Item_2", "Item_3"]
            toDoItens.forEach(function(item, indice, array){
                telaInicialPage.inputText(item)
            })
        })
        //Concluindo item
        it('Concluir Itens da Lista',()=>{
            telaInicialPage.concludeItem()
        //Validando item concluído
            telaInicialPage.counterItem(2)
        })
    })

    /*
    Validação dos Filtros de itens da lista To Do
    */
    context('Validar filtro de Itens',() =>{
        beforeEach(()=>{
            cy.visit('/')
            //Incluindo itens a lista
            var toDoItens = ["Item_1", "Item_2", "Item_3","Item_4"]
            toDoItens.forEach(function(item, indice, array){
                telaInicialPage.inputText(item)
            })
            //Concluindo item da lista
            telaInicialPage.concludeItem()
        })
        //Filtrando itens ativos
        it('Filtrando por itens Ativos',()=>{
            telaInicialPage.filterActiveItem()
        //Validando tamanho da lista
            telaInicialPage.itemList(3)
        })
        //Filtrando itens concluídos
        it('Filtrando por itens Completos',()=>{
            telaInicialPage.filterCompletedItem()
        //Validando tamanho da lista
            telaInicialPage.itemList(1)
        })
    })

    context('Validar Exclusão de Itens',() =>{
        beforeEach(()=>{
            cy.visit('/')
            //Incluindo itens a lista
            var toDoItens = ["Item_1", "Item_2", "Item_3","Item_4"]
            toDoItens.forEach(function(item, indice, array){
                telaInicialPage.inputText(item)
            })
            //Concluindo item da lista
            telaInicialPage.concludeItem()
        })
        //Excluindo item
        it('Excluindo itens da lista',()=>{
            telaInicialPage.deleteItem()
        //Validando a exclusão do item
            telaInicialPage.counterItem(3)
        })
    })      
});
