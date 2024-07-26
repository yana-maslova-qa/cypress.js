import * as data from "../helpers/default_data.json"
import * as main_page from "../locators/main_page.json"
import * as recovery_password_page from "../locators/recovery_password_page.json"
import * as result_page from "../locators/result_page.json"

describe('Тесты_авторизации', function () {

    beforeEach('Начало_теста', function () {
        cy.visit('/');
    });   

    afterEach('Конец_теста', function () {
        cy.get(result_page.close).should('be.visible');
    });

    it('Вход_с_правильным_логином_и_паролем', function () {
         cy.get(main_page.email).type(data.login);
         cy.get(main_page.password).type(data.password);
         cy.get(main_page.login_button).click();
         cy.get(result_page.title).contains('Авторизация прошла успешно');
     })

    it('Восстановление_пароля_с_правильным_паролем', function () {
         cy.get(main_page.fogot_pass_btn).click();
         cy.get(recovery_password_page.email).type(data.login);
         cy.get(recovery_password_page.send_button).click();
         cy.get(result_page.title).contains('Успешно отправили пароль на e-mail');

     })

    it('Вход_с_НЕправильным_паролем', function () {
         cy.get(main_page.email).type(data.login);
         cy.get(main_page.password).type('iLoveqa');
         cy.get(main_page.login_button).click();
         cy.get(result_page.title).contains('Такого логина или пароля нет');
     })

    it('Вход_с_логином без_@', function () {
        cy.get(main_page.email).type('germandolnikov.ru');
        cy.get(main_page.password).type(data.password);
        cy.get(main_page.login_button).click();
        cy.get(result_page.title).contains('Нужно исправить проблему валидации');
    })

    it('Вход_с_НЕправильным_логином', function () {
        cy.get(main_page.email).type('erman@dolnikov.ru');
        cy.get(main_page.password).type(data.password);
        cy.get(main_page.login_button).click();
        cy.get(result_page.title).contains('Такого логина или пароля нет');
    })

    it('Провальный тест', function () {
         cy.get(main_page.email).type('GerMan@Dolnikov.ru');
         cy.get(main_page.password).type(data.password);
         cy.get(main_page.login_button).click();
         cy.get(result_page.title).contains('Авторизация прошла успешно');
     })
})