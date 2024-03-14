/**
 * 
 */
const elem = require('../elements/telaInicial.elements').ELEMENTS
const item = require('../elements/telaInicial.elements').ITENS
const filterItem = require('../elements/telaInicial.elements').FILTERS

class telaInicial {

    checkInput(text){
        cy.get(elem.inputToDo)
            .should('have.attr', 'placeholder')
            .and('include', text)
    }

    inputText(item){
        cy.get(elem.inputToDo).type(item).type('{enter}')
    }

    concludeItem(){
        cy.get(item.buttonConcludeItem)
            .first()
            .click();
    }

    counterItem(number){
        cy.get(item.counter)
            .should('have.text', number)
    }

    filterAllItem(){
        cy.get(filterItem.buttonFilterAll)
            .contains("All")
            .click();
    }

    filterActiveItem(){
        cy.get(filterItem.buttonFilterActive)
            .contains("Active")
            .click()
    }
    
    filterCompletedItem(){
        cy.get(filterItem.buttonFilterCompleted)
            .contains("Completed")
            .click();
    }

    deleteItem(){
        cy.get(item.itemList)
            .find('button')
            .first()
            .invoke('show')
            .click()
    }

    itemList(number){
        cy.get(item.itemList)
            .should('have.length', number)
    }
}
export default new telaInicial();