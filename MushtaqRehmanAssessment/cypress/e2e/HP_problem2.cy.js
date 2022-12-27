// problem #2 Print Map
/// <reference types="cypress" />

    describe('visit the website', function() {
	beforeEach(function() {
    cy.visit('https://computer-database.gatling.io/computers')
	})

	it('filterTableByValue', function(){
		cy.get('#searchbox')
		.type('HP')
		.get('#searchsubmit')
		.click();

		//map
		cy.get('tr:first-child td').invoke('remove'); //remove first table
		cy.get('tr td')
		.invoke('text')
		.log('taking screenshot of the map')
		//cy.screenshot();
	})
})
    //describe ('FilterTableByValue', function() {
	//Open application

	//Locate filter element and send value ('HP')

	//Press 'filter by name' button

	//Create map of the returned list & print map
	
	//var HpList = new map([
		//['computer name', ['introduced date','discontinued date','company name']]
	//])

	//console.log(HpList)

	//

//})