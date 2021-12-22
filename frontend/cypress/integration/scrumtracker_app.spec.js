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
      cy.get('#priority-input').clear()
      cy.get('#storypoint-input').clear()
      cy.get('#priority-input').type('10')
      cy.get('#storypoint-input').type('10')
      cy.get('#status-dropdown').select('planned')
      cy.get('#new-story-button').click()
      cy.contains('New userstory from cypress')
    })

    it('userstory can be deleted', function() {
      cy.get('#story-input').type('Testing with Cyppress')
      cy.get('#priority-input').clear()
      cy.get('#storypoint-input').clear()
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
      cy.get('#priority-input').clear()
      cy.get('#storypoint-input').clear()
      cy.get('#priority-input').type('10')
      cy.get('#storypoint-input').type('10')
      cy.get('#status-dropdown').select('planned')
      cy.get('#new-story-button').click()
      cy.contains('Testing with Cyppress')
      cy.get('#storyinfo-button').click()
      cy.contains('Modify User Story')
    })

    describe('and userstoryinfo opened', function() {
      beforeEach(function() {
        cy.get('#story-input').type('Testing with Cyppress')
        cy.get('#priority-input').clear()
        cy.get('#storypoint-input').clear()
        cy.get('#priority-input').type('10')
        cy.get('#storypoint-input').type('10')
        cy.get('#status-dropdown').select('planned')
        cy.get('#new-story-button').click()
        cy.contains('Testing with Cyppress')
        cy.get('#storyinfo-button').click()
        cy.contains('Modify User Story')
      })

      it('userstory can be modified', function() {
        cy.contains('Priority: 10')
        cy.contains('Storypoints: 10')
        cy.contains('Status: planned')
        cy.get('#modify-priority-input').clear()
        cy.get('#modify-storypoint-input').clear()
        cy.get('#modify-priority-input').type('25')
        cy.get('#modify-storypoint-input').type('25')
        cy.get('#modify-status-dropdown').select('done')
        cy.get('#modify-story-button').click()
        cy.contains('Priority: 25')
        cy.contains('Storypoints: 25')
        cy.contains('Status: done')
      })
      it('new task can be added', function() {
        cy.get('#task-input').type('New task from Cypress')
        cy.get('#task-status-dropdown').select('doing')
        cy.get('#add-task-button').click()
        cy.contains('Task: New task from Cypress')
      })
      it('new comment can be added', function() {
        cy.get('#comment-input').type('New comment from Cypress')
        cy.get('#comment-button').click()
        cy.contains('New comment from Cypress')
      })
    })
  })
})