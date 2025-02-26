
describe('QAuto Header and Footer Tests', () => {
    beforeEach(() => {
      cy.visit('/');
    });
    
    it('should find all buttons in the header', () => {
    
      cy.get('header').within(() => {
        cy.contains('.header-link', 'Home').should('be.visible');
        cy.contains('.header-link', 'About').prev;
        cy.contains('.header-link','Contacts').should('be.visible');
        cy.contains('.header-link', 'Guest log in').should('be.visible');
        cy.contains('.header_signin', 'Sign In').should('be.visible');
      });
    });
    
    it('should find Sign In button on middle part of site',() =>{
      cy.get('section hero').within(() =>{
        cy.contains('.hero-descriptor_btn', 'Sign In').should('be.visible');
      }
      );
    });

    it.only('should find all links and buttons in the footer', () => {
      const signInButSelContacts ='.socials_icon';
        cy.get(signInButSelContacts).eq(0).should('have.class','socials_icon icon icon-facebook');
        cy.get(signInButSelContacts).eq(1).should('have.class','socials_icon icon icon-telegram');;
        cy.get(signInButSelContacts).eq(2).should('have.class','socials_icon icon icon-youtube');;
        cy.get(signInButSelContacts).eq(3).should('have.class','socials_icon icon icon-instagram');;
        cy.get(signInButSelContacts).eq(4).should('have.class','socials_icon icon icon-linkedin');;

        const signInButSelURL ='.contacts_link';
        cy.get(signInButSelURL).eq(0).should('have.class','contacts_link display-4');
        cy.get(signInButSelURL).eq(1).should('have.class','contacts_link h4');;
    });


    it('title',() =>{
      cy.title().should('equal', 'Hillel Qauto');
      }
      );

      it('url',() =>{
        cy.url().should('equal', 'https://qauto.forstudy.space/');
        }
        ); 
  });