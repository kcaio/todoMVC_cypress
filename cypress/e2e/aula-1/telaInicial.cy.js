/*
Feature -> describe
Background -> Contexto ou BeforeEach
Caso de Teste -> it
*/

import telaInicialPage from "../../support/pageObjects/telaInicial.page"

describe('Acessar a página do todoMVC', () => {
  beforeEach(()=>{
    cy.visit('/')
  })
  it('Abrir o site', () => {
    telaInicialPage.inputText("Caio Torres")
  })
});