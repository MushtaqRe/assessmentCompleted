// problem #3 return list from the last page & print result
/// <reference types="cypress" />

    describe ('Visit the website', function() {
	//add beforeEach block ------- same as BeforeMethod annotation in TestNG
	beforeEach(function() {
    cy.visit('https://computer-database.gatling.io/computers')
	})

	//Locate filter element ,send value ('IBM') and click filter by computer button
	it('Print IBM Map of computers', function(){

	cy.get('#searchbox')
	.type("IBM")
	.get('#searchsubmit')
	.click();

	// remove first row and take a screenshot of the Map
	cy.get('tr:first-child td').invoke("remove");
	cy.get('tr td').invoke("text").log("take a screenshot of the map");
	//cy.screenshot();

	//Navigate to last page
	cy.get('#pagination > ul > li.next > a').click();
	cy.get('#pagination > ul > li.next > a').click();
	cy.get('#pagination > ul > li.next > a').click();

	cy.get('tr td').invoke("text").log("taking a screenshot of the map");
	

	})
	

	



})