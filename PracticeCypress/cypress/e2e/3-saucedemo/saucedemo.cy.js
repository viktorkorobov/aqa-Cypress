/// <reference types="cypress" />

describe('SauceDemo Login Tests', () => {
    beforeEach(() => {
      cy.visit('v1/');
    });
  
    it('should login with valid credentials', () => {
      // Ввод правильного имени пользователя и пароля
      cy.get('#user-name').type('standard_user');
      cy.get('#password').type('secret_sauce');
  
      // Нажатие кнопки логина
      cy.get('#login-button').click();
  
      // Проверка, что пользователь успешно авторизован
      cy.url().should('include', '/inventory.html');
      cy.get('.product_label').should('contain', 'Products');
    });
  
    it('should show error message with invalid credentials', () => {
      // Ввод неправильного имени пользователя и пароля
      cy.get('#user-name').type('wrong_user');
      cy.get('#password').type('wrong_password');
  
      // Нажатие кнопки логина
      cy.get('#login-button').click();
  
      // Проверка сообщения об ошибке
      cy.get('[data-test="error"]').should('be.visible').and('contain', 'Epic sadface: Username and password do not match any user in this service');
    });
  });
  