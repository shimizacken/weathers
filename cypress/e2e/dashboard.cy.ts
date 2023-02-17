import {TestId} from '../../src/testId';

describe('dashboard test suite', () => {
    beforeEach(() => {
        cy.visit('http://localhost:3000/');
    });

    it('should have weather cards', () => {
        cy.visit('http://localhost:3000/');

        cy.get(`[data-cy=${TestId.WEATHER_CARD}]`);
    });
});
