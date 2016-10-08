export const convertTextToArr = (text) => text.split(' ')

export const addGuest = (guestData, newGuest) => guestData.contains(newGuest) ? guestData : [...guestData, newGuest]

Array.prototype.contains = function(obj) {
	let i = this.length
	while(i--) {
		if(this[i].name === obj.name && this[i].screen_name === obj.screen_name) 
			return true
	}
	return false
}

//////// for testing scroll //////////
export const dupicateTweets = () => {
	return new Array(100).fill({
		name: 'tidjungs',
		screen_name: 'handmakers',
		text: ['hello ' ,'#bcbk'],
		time: 'Sep 4',
		profile_image: 'http://pbs.twimg.com/profile_images/729383654787440640/gw1BgE0l_normal.jpg'
	});
}

export const dupicateGuest = () => {
	let arr = []
	for(var i=0; i<100; i++) {
		let guest =	{ 
				name: 'bot' + i,
				screen_name: 'bot name' + i,
				text: [],
				time: 'Sep 4',
				profile_image: 'http://pbs.twimg.com/profile_images/729383654787440640/gw1BgE0l_normal.jpg'
			}
		arr.push(guest)
	}
	return arr
}

////////////////////////////////////////

export const random = (data) => data[Math.floor(Math.random() * data.length)]
