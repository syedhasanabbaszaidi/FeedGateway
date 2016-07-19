test:
	./node_modules/.bin/mocha "test/client/**/*.js" --reporter spec -R spec --ui bdd

 .PHONY: test