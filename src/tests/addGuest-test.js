import { expect } from 'chai'
import { addGuest } from '../utils'
describe('test add Guest ', () => {
	
	const guest1 = {
		name: 'tidjungs',
		screen_name: 'handmakers',
		text: ['hello ' ,'#bcbk'],
		time: 'Sep 4',
		profile_image: 'http://pbs.twimg.com/profile_images/729383654787440640/gw1BgE0l_normal.jpg'
	}

	const guest2 = {
		name: 'cal',
		screen_name: 'komcal',
		text: ['hello ' ,'#bcbk'],
		time: 'Sep 4',
		profile_image: 'http://pbs.twimg.com/profile_images/729383654787440640/gw1BgE0l_normal.jpg'
	}

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