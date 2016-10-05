import React from 'react';
import { shallow, mount } from 'enzyme';
import {expect} from 'chai';
import App from '../App';

describe('test App component', () => {
  const wrapper = mount(<App />);

  it('should renders App without crashing', () => {
    shallow(<App />);
  });

  // it('should render background', () => {
  //   const background = <img class="App__image___v7apz" src="/static/media/bcbk.7b97e522.jpg" role="presentation" />
  //   expect(wrapper.contains(background)).to.equal(true);
  // });

  // it("should render tweet", function() {
  //   expect(wrapper.find('.tweets').length).to.equal(2);
  // });
});
