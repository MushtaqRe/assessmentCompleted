/// <reference types="cypress" />

describe('Visit the Website', function(){
	beforeEach(function(){ // beforeEach Method will run before each it block 
		cy.visit("https://computer-database.gatling.io/computers");
	})
	// for time being i am hard coding the test data. Best practice is separate test data from test script. 
	it('Commodore 64 Negative Test Validation', function(){
		cy.get('#searchbox')
		.type("Commodore 64")
		.get('#searchsubmit')
		.click();

		cy.get('#main > table > tbody > tr:nth-child(1) > td:nth-child(1) > a')
		.click();

		//clear fields before send keys 

		cy.get('#introduced')
		.type("This is Test");

		//submit button
		cy.get('#main > form:nth-child(2) > div > input')
		.click();

		cy.get('#main > form:nth-child(2) > div > input')
		.next()
		.should('not.have.text', "Error not accept date values");
		
		// Asseration2
		//1. grab cell value and compare it to company name (Sony)
	})

		it('Commodore 64 Positive Test', function(){
			cy.get('#searchbox')
			.type("Commodore 64")
			.get('#searchsubmit')
			.click();

			cy.get('#main > table > tbody > tr:nth-child(1) > td:nth-child(1) > a')
			.click();

			cy.get('#company').select("Tandy Corporation")

			cy.get('input.btn.primary')
			.click()
			
			//Asseration1
			cy.get('.alert-message')
			.contains("Done !")// for this Testcase i will add multiply Asseration. one of them is get "DONE" pop up. 
			                   // * This is bug. "DONE" message pops up but info did not saved. 
			
			// Asseration2 (pseudocode)
			// 1. look up computer (Commordor 64)
			// 2. Locate Computer Commodor 64
			// 3. Compare table values with test data

		})




})