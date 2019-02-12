import React from 'react';
import { mount } from 'enzyme';
import Loan from './Loan';

describe('Loan', () => {
  describe('should render', () => {
    it('should render', () => {
      const wrapper = mount(<Loan />);
      expect(wrapper.html().length).toBeGreaterThan(0);
      wrapper.unmount();
    });
  });
});
