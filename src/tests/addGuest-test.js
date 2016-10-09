import { expect } from 'chai'
import { addGuest } from '../utils'
import { data1 as guest1,
				 data2 as guest2 } from '../const/query'

describe('test add Guest ', () => {
	
	let guestData = [];

	it('should add guest1 success', () => {
		guestData = addGuest(guestData, guest1);
		expect(guestData.length).to.equal(1);
		expect(guestData[0].name).to.equal('tidjungs');
  });

	it('should not add guest', () => {
		guestData = addGuest(guestData, guest1);
		expect(guestData.length).to.equal(1);
  });
	
  it('should add guest2 success', () => {
  	guestData = addGuest(guestData, guest2);
		expect(guestData.length).to.equal(2);
		expect(guestData[0].name).to.equal('tidjungs');
		expect(guestData[1].name).to.equal('cal');
  });

})