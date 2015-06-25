describe('Check to see if there is Navigation', function(){
	it('Should have a nav bar', function{
		expect(nav.isPresent()).toBe(true)
	});
	it('Should have 3 nav options', function{
		expect(navOptions.count()).toBe(3)
	});
	it('the last option is named "Messages"', function{
		expect(navOptions.Last().getText()).toContain('Messages')
	})
})