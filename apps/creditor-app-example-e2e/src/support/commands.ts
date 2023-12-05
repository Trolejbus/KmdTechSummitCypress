/* eslint-disable @typescript-eslint/no-explicit-any */
// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************

// eslint-disable-next-line @typescript-eslint/no-namespace
declare namespace Cypress {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  interface Chainable<Subject> {
    step<T>(message: string, fn: () => void | Cypress.Chainable<T>): Cypress.Chainable<T>;
  }
}

Cypress.Commands.add('step', (message, fn) => {
  Cypress.log({
    name: '🖐️ Step - ',
    message: `${message}`,
    groupStart: true,
  } as any);

  const result = fn();
  cy.wrap(result).then(() => endGroup());
});

function endGroup() {
  collapseLastGroup()
  Cypress.log({ groupEnd: true, emitOnly: true } as any);
}

function collapseLastGroup() {
  const openExpanders = window.top!.document.getElementsByClassName(
    'command-expander-is-open',
  )
  const numExpanders = openExpanders.length
  const el = openExpanders[numExpanders - 1]

  if (el) el.parentElement!.click()
}
