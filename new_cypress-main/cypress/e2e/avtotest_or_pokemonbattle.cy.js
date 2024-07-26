import * as data from "../helpers/default_datal.json"
import * as authorization from "../locators/locators_pokemons/authorization.json"
import * as pokemonbattle from "../locators/locators_pokemons/pokemonbattle.json"
import * as payment from "../locators/locators_pokemons/payment.json"
import * as success from "../locators/locators_pokemons/success.json"

describe('e2e_тесты_критического_пути', function () {

    beforeEach('Начало теста', function () {
        cy.visit('https://pokemonbattle.ru/');
        cy.get(authorization.email).type(data.login);
        cy.get(authorization.password).type(data.password);
        cy.get(authorization.login_button).click();
        cy.wait(1000);
        cy.get(pokemonbattle.trener_button).click();
        cy.wait(1000);
    });

    afterEach('Конец теста', function () {
        cy.get(payment.nomer).type(data.nomer);
        cy.get(payment.cod).type(data.cod);
        cy.get(payment.data).type(data.data);    
        cy.get(payment.name).type(data.name);
        cy.get(payment.pay_btn).click();
        cy.get(success.conf_number).type(data.confirmation_number);
        cy.get(success.sub_button).click();
        cy.contains('Покупка прошла успешно').should('be.visible');
       });

    it('Покупка аватара №1', function () {
         cy.get(pokemonbattle.trener1).click();
     })

    it('Покупка аватара №2', function () {
         cy.get(pokemonbattle.trener2).click();
     })

    it('Покупка аватара №3', function () {
         cy.get(pokemonbattle.trener3).click();
     })

    it('Покупка аватара №4', function () {
         cy.get(pokemonbattle.trener4).click();
     })

    it('Покупка аватара №5', function () {
         cy.get(pokemonbattle.trener5).click();
     })

    it('Покупка аватара №6', function () {
         cy.get(pokemonbattle.trener6).click();
     })

    it('Покупка аватара №7', function () {
         cy.get(pokemonbattle.trener7).click();
     })

    it('Покупка аватара №8', function () {
         cy.get(pokemonbattle.trener8).click();
     })

    it('Покупка аватара №9', function () {
         cy.get(pokemonbattle.trener9).click();
     })

    it('Покупка аватара №10', function () {
         cy.get(pokemonbattle.trener10).click();
     })

    it('Покупка аватара №11', function () {
         cy.get(pokemonbattle.trener11).click();
     })

    it('Покупка аватара №12', function () {
         cy.get(pokemonbattle.trener12).click();
    })
})