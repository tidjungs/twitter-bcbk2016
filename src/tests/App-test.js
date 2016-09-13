import React from 'react';
import { shallow } from 'enzyme';
import {expect} from 'chai';
import App from '../App';

describe('test App component', () => {
  it('renders without crashing', () => {
    shallow(<App />);
  });

  it('renders welcome message', () => {
    const wrapper = shallow(<App />);
    const welcome = <h2>Welcome to React</h2>;
    expect(wrapper.contains(welcome)).to.equal(true);
  });
  
})