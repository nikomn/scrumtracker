describe('Scrumtracker app', function() {
  beforeEach(function() {
    cy.visit('http://localhost:3000')
  })

  it('front page can be opened', function() {
    cy.contains('Wellcome to Scrum Tracker App')
  })

  it('user can login', function () {
    cy.get('#username-input').type('test1')
    cy.get('#password-input').type('test1')
    cy.get('#login-button').click()

    cy.contains('Add new User Story')
  })
})