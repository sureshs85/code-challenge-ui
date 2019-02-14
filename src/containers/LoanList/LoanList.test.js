import React from 'react';
import { shallow } from './../../enzyme';

import LoanList from './LoanList';

describe('Loan tests', () => {
  it('renders list-items', () => {
    const wrapper = shallow(<LoanList />);
    expect(wrapper.find('.wrapper')).toBeDefined();
    expect(wrapper.find('.card')).toHaveLength(1);
  });
});
