describe('Test Success flow', () => {
  
  let creditorId: number;
  let application: null;
  
  beforeEach(() => {
    cy.step('Initialize Test', () => {
      new CreditorTools().createNewCreditor({ features: ['Documentation', 'CustomColors'] }).then(id => {
        creditorId = id;
      });
    });
    
  });

  it('Test success flow', () => {
    new ApplicationTools().forCreditor(creditorId).create({ state: 'consentNotProvided' }).then(a => application = a);
    cy.visit(`http://localhost:4200/applicant-app/${application}`);
    cy.intercept('http://localhost:3000/applications/*/init3rdParty', ({
      statusCode: 500,
      body: null,
    }));

    cy.get('[data-cy=ApproveConsentButton]').click();
    cy.get('[data-cy=ConsentError]').should('be.visible');
    cy.get('[data-cy=Step3]').find('[data-cy=GoNextButton]').click();

    cy.get('[data-cy=FinalizeText]').should('be.visible');
  });
});

export class ApplicationTools {
  public create(args: { state: 'consentNotProvided' }): Cypress.Chainable<null> {
    console.log(args);
    return cy.wrap(null);
  }

  public forCreditor(crditor: number): ApplicationTools {
    console.log(crditor);
    return this;
  }
}

export class CreditorTools {
  public createNewCreditor(args: { features: ['Documentation', 'CustomColors'] }): Cypress.Chainable<number> {
    return cy.step('Create New Creditor', () => {
      const creditorModel = new CreditorBuilder().withFeatures(args.features).build();
      return cy.request('POST', 'http://localhost:3000/api/creditors', creditorModel)
        .then(response => response.body as number);
    });
  }

  public logInToCreditor(id: number) {
    console.log(id);

  }
}

export class CreditorBuilder {
  withFeatures(features: unknown[]): CreditorBuilder {
    console.log(features);
    return this;
  }

  build(): undefined {
    return undefined;
  }
}