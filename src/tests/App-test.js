import React from 'react';
import { shallow, mount } from 'enzyme';
import {expect} from 'chai';
import App from '../App';

describe('test App component', () => {
  const wrapper = mount(<App />);

  it('should renders App without crashing', () => {
    shallow(<App />);
  });

  it('should render welcome message', () => {
    const welcome = <h2>Welcome to React</h2>;
    expect(wrapper.contains(welcome)).to.equal(true);
  });

  it("should render tweet", function() {
    expect(wrapper.find('.tweets').length).to.equal(1);
  });
});
