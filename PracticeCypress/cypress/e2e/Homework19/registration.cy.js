describe("Registration Tests", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("should display registration form", () => {
    cy.contains("Sign up").should("be.visible").click();

    cy.get("#signupName").type("A").blur();
    cy.contains("Name has to be from 2 to 20 characters long").should(
      "be.visible"
    );

    cy.get("#signupLastName").type("B").blur();
    cy.contains("Last name has to be from 2 to 20 characters long").should(
      "be.visible"
    );

    cy.get("#signupEmail").type("invalid-email").blur();
    cy.contains("Email is incorrect").should("be.visible");

    cy.get("#signupPassword").type("short").blur();
    cy.contains(
      "Password has to be from 8 to 15 characters long and contain at least one integer, one capital, and one small letter"
    ).should("be.visible");

    cy.get(".close>span").click();
  });


  it.only("should successfully register a new user", () => {
    cy.contains("Sign up").should("be.visible").click();
    const uniqueEmail = `testuser${Date.now()}@example.com`;
    const uniqueEmailCopy = uniqueEmail;

    cy.get("#signupName").type("John");
    cy.get("#signupLastName").type("Doe");
    cy.get("#signupEmail").type(uniqueEmail);
    cy.get("#signupPassword").type("ValidPass123", { sensitive: true });
    cy.get("#signupRepeatPassword").type("ValidPass123", { sensitive: true });
    cy.get("button").contains("Register").click();
    cy.contains("Registration complete").should("be.visible");
    cy.get(".sidebar > .btn-link > .icon").click();

    cy.contains("Sign In").should("be.visible").click();
    cy.get("#signinEmail").type(uniqueEmailCopy);
    cy.get("#signinPassword").type("ValidPass123", { sensitive: true });
    cy.get("button").contains("Login").click();
    cy.contains("You have been successfully logged in").should("be.visible")
  });
});
