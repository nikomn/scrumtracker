describe('Scrumtracker app', function() {
  beforeEach(function() {
    cy.request('POST', 'http://localhost:3001/api/testing/reset')
    const user = {
      username: 'test1',
      password: 'test1'
    }
    cy.request('POST', 'http://localhost:3001/api/users/', user)
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

  describe('when logged in', function() {
    beforeEach(function() {
      cy.contains('Login')
      cy.get('#username-input').type('test1')
      cy.get('#password-input').type('test1')
      cy.get('#login-button').click()
    })

    it('new userstory can be created', function() {
      cy.get('#story-input').type('New userstory from cypress')
      cy.get('#priority-input').type('10')
      cy.get('#storypoint-input').type('10')
      cy.get('#status-dropdown').select('planned')
      cy.get('#new-story-button').click()
      cy.contains('New userstory from cypress')
    })

    it('userstory can be deleted', function() {
      cy.get('#story-input').type('Testing with Cyppress')
      cy.get('#priority-input').type('10')
      cy.get('#storypoint-input').type('10')
      cy.get('#status-dropdown').select('planned')
      cy.get('#new-story-button').click()
      cy.contains('Testing with Cyppress')
      cy.get('#delete-story-button').click()
      cy.contains('Testing with Cyppress').should('not.exist')
    })

    it('userstoryinfo can be opened', function() {
      cy.get('#story-input').type('Testing with Cyppress')
      cy.get('#priority-input').type('10')
      cy.get('#storypoint-input').type('10')
      cy.get('#status-dropdown').select('planned')
      cy.get('#new-story-button').click()
      cy.contains('Testing with Cyppress')
      cy.get('#storyinfo-button').click()
      cy.contains('Modify User Story')
    })
  })
})