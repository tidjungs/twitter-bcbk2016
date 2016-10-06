import { expect } from 'chai'
import { convertTextToArr } from '../utils'
describe('test text converter ', () => {
	var text = 'hello #bcbk #cpe #ske barcamp bangkhen'
	var result = convertTextToArr(text)
	it('should convert text separate by space', () => {
		expect(result.length).to.equal(6)
		expect(result[0][0] !== '#')
		expect(result[1][0] === '#')
  });
})