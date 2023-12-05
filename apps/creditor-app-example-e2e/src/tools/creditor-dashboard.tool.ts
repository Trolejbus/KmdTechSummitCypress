export class CreditorDashboardTool {
    public assertVisible(): CreditorDashboardTool {
        cy.get('[data-cy=CreditorDashboard]').should('be.visible');
        return this;
    }

    public assertRowsCount(args: { count: number }): CreditorDashboardTool {
        cy.get('[data-cy=CaseEntry]').should('have.length', args.count);
        return this;
    }    

    public row(args: { rowIndex: number }): CreditorDashboardRowTool {    
        return new CreditorDashboardRowTool(() => cy.get('[data-cy=CaseEntry]').eq(args.rowIndex));
    }
}

export class CreditorDashboardRowTool {
    constructor (private rowSelector: () => Cypress.Chainable<JQuery<HTMLElement>>) {

    }

    public goToEdit(): CreditorDashboardRowTool {
        this.rowSelector().find('[data-cy=EditButton]').click();
        return this;
    }
}
