export class ApplicantAppTool {
    public assertVisible(): ApplicantAppTool {
        cy.get('[data-cy=ApplicantApp]').should('be.visible');
        return this;
    }

    public fillStep1(): ApplicantAppTool {
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
        return this;
    }

    public submitStep1(): ApplicantAppTool {
        cy.get('[data-cy=Step1]').find('[data-cy=GoNextButton]').click();
        return this;
    }
    
    public fillStep2(): ApplicantAppTool {
        cy.get('[data-cy=Step2]').should('be.visible');
        cy.get('[data-cy=ChildrenCountInput]').type('2', { force: true });
        cy.get('[data-cy=CarsCountInput]').type('3', { force: true });
        return this;
    }

    public submitStep2(): ApplicantAppTool {
        cy.get('[data-cy=Step2]').find('[data-cy=GoNextButton]').click();
        return this;
    }
    
    public approveConsent(): ApplicantAppTool {
        cy.get('[data-cy=ApproveConsentButton]').click();
        cy.get('[data-cy=ApproveConsentButton]').should('be.disabled');
        cy.get('[data-cy=Step3]').find('[data-cy=GoNextButton]').click();
        return this;
    }

    public shouldBeFinalized(): ApplicantAppTool {
        cy.get('[data-cy=FinalizeText]').should('be.visible');
        return this;
    }
}
