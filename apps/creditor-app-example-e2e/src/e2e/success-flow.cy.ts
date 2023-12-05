describe('Test Success flow', () => {
  it('Test success flow', () => {

    cy.step('Clear previous data', () => {
      cy.request('POST', 'http://localhost:3000/reset');
    });

    cy.step('Navigate to Application Form', () => {
      cy.visit('http://localhost:4200/creditor-app');
      cy.get('[data-cy=AddButton]').click();
    })

    cy.step('Fill And Submit Form', () => {
      cy.get('[data-cy=ReferenceNo]').type('000-0001', { force: true });
      cy.get('[data-cy=ApplicantName]').type('John', { force: true });
      cy.get('[data-cy=ApplicantSurname]').type('Doe', { force: true });
      cy.get('[data-cy=ApplicantPhone]').type('678 123 456', { force: true });
      cy.get('[data-cy=ApplicantEmail]').type('test@example.com', { force: true });
      cy.get('[data-cy=LoanAmount]').type('2000000', { force: true });
      cy.get('[data-cy=MonthlyPaymentAmount]').type('3000', { force: true });
      cy.get('[data-cy=InitialPayment]').type('60000', { force: true });
      cy.get('[data-cy=RentCheckbox] input').click();
      cy.get('[data-cy=SubmitButton]').click();
    });

    

    cy.get('[data-cy=CreditorDashboard]').should('be.visible');
    cy.get('[data-cy=CaseEntry]').should('have.length', 1);
    cy.get('[data-cy=CaseEntry]').eq(0).find('[data-cy=EditButton]').click();

    cy.get('[data-cy=ApplicantApp]').should('be.visible');

    cy.get('[data-cy=SsnInput]').type('987654321', { force: true });
    cy.get('[data-cy=MarriedCheckbox]').find('input').click();
    cy.get('[data-cy=AddressInput]').type('Gondor Street 1/12 00-001 Gondor', { force: true });
    cy.get('[data-cy=AgeInput]').type('35', { force: true });
    cy.get('[data-cy=BirthCityInput]').type('Radom', { force: true });
    cy.get('[data-cy=NationalityInput]').type('Polska', { force: true });
    cy.get('[data-cy=FavouriteClubSelect]').click();
    cy.get('[data-cy=RadomiakOption]').click();
    cy.get('[data-cy=FavouriteLanguage]').click();
    cy.get('[data-cy=TsOption]').click();
    cy.get('[data-cy=GrunwaldDateInput]').type('07/14/1410', { force: true });
    cy.get('[data-cy=Step1]').find('[data-cy=GoNextButton]').click();

    cy.get('[data-cy=Step2]').should('be.visible');
    cy.get('[data-cy=ChildrenCountInput]').type('2', { force: true });
    cy.get('[data-cy=CarsCountInput]').type('3', { force: true });
    cy.get('[data-cy=Step2]').find('[data-cy=GoNextButton]').click();

    cy.get('[data-cy=ApproveConsentButton]').click();
    cy.get('[data-cy=ApproveConsentButton]').should('be.disabled');
    cy.get('[data-cy=Step3]').find('[data-cy=GoNextButton]').click();

    cy.get('[data-cy=FinalizeText]').should('be.visible');
  });
});
