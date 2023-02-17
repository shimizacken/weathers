import {TestId} from '../../src/testId';

describe('weather details test suite', () => {
    beforeEach(() => {
        cy.visit('http://localhost:3000/');
    });

    it('should have back button', () => {
        cy.get(`[data-cy=${TestId.WEATHER_CARD}]`).first().click();

        cy.get(`[data-cy=${TestId.BACK_BUTTON}]`).should('exist');
    });
});
