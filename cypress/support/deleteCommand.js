Cypress.Commands.add("login", (mejl, passvord) => {
    Cypress.log({

        name: 'LoginByForm',
        message:mejl + '|' + passvord


    })
    cy.request({
        method: 'DELETE',
        url: Cypress.env('apiUrl') + '/galleries/' + 1024,
        form: true,
        followRedirect: true,
        body: {
          email: mejl,
          password: passvord,
        }
      })
    })
