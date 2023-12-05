export class ApplicationFormTool {
    public fill(): ApplicationFormTool {
        cy.get('[data-cy=ReferenceNo]').type('000-0001', { force: true });
        cy.get('[data-cy=ApplicantName]').type('John', { force: true });
        cy.get('[data-cy=ApplicantSurname]').type('Doe', { force: true });
        cy.get('[data-cy=ApplicantPhone]').type('678 123 456', { force: true });
        cy.get('[data-cy=ApplicantEmail]').type('test@example.com', { force: true });
        cy.get('[data-cy=LoanAmount]').type('2000000', { force: true });
        cy.get('[data-cy=MonthlyPaymentAmount]').type('3000', { force: true });
        cy.get('[data-cy=InitialPayment]').type('60000', { force: true });
        cy.get('[data-cy=RentCheckbox] input').click();
        return this;
    }

    public submit(): void {   
        cy.get('[data-cy=SubmitButton]').click();
    }
}
