/// <reference types="cypress" />

	describe('Visit the Website', function(){
	beforeEach(function(){ // beforeEach Method will run before each it block 
		cy.visit("https://computer-database.gatling.io/computers");
	})
	
	it("Add a new computer", function(){
		// click add a new computer button and sent keys
	cy.get('#add').click();
	cy.get('#name').type("Evans & Sutherland");
	cy.get('#introduced').type("2020-01-01");
	cy.get('#discontinued').type("2022-10-10");
	cy.get('#company').select("Evans & Sutherland");

	// click create this computer button
	cy.get('#main > form > div > input').click();
	
	//Asseration1 
	cy.get('.alert-message').contains('Done ! Computer Evans & Sutherland has been created');
	
	//asseration2
	// filter new computer ( Evans & sutherland) and click submit button
	// verify table data for new computer matched with test data
	
	
	//check if value is present anywhere in the table- only works for current page
		//cy.get('[class="computers zebra-striped"]>tbody>tr').contains('td','ACE').should('be.visible')
	
		//paginated assumption table size reamins 10 rows

		//Loop through the pages until the value (Commodore 64) is found and click on it
	
	
	
	})


	})