import React from 'react';
import { shallow, mount } from 'enzyme';
import {expect} from 'chai';
import App from '../App';

describe('test App component', () => {
  const wrapper = mount(<App />);

  it('should renders App without crashing', () => {
    shallow(<App />);
  });

  it('should renders welcome message', () => {
    const welcome = <h2>Welcome to React</h2>;
    expect(wrapper.contains(welcome)).to.equal(true);
  });

  it("should render tweet card along state", function() {
    wrapper.setState({
      tweets: [
        {text: 'test1'},
        {text: 'test2'},
        {text: 'test3'}
      ]
    });
    expect(wrapper.find('.card').length).to.equal(3);
    expect(wrapper.find('.card').length).not.equal(0);
  });
});
