import { expect } from 'chai'
import { convertTextToArr } from '../utils'
describe('test text converter ', () => {
	const text = 'hello #bcbk #cpe #ske barcamp bangkhen'
	const result = convertTextToArr(text);
	it('should convert text separate by space', () => {
		expect(result.length).to.equal(6);
		expect(result[0][0]).to.not.equal('#');
		expect(result[1][0]).to.equal('#');
  });
})