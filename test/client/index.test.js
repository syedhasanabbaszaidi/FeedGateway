'use strict';

// Create the gatekeeper constrctor instance

var feed = new FeedGateway();


// Gatekeeper module test
describe('# Module: Feed', function(){


	describe('- new Feed() object instance', function(){
		it('Should return the created object.', function(done){
			expect(feed).to.be.an('object');
			done();
		})
	});
	
});
