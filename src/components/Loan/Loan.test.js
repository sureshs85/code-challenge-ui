import React from 'react';
import { shallow } from './../../enzyme';

import Loan from './Loan';

describe('Loan tests', () => {
  it('renders list-items', () => {
    const loan = {
      Id: 1,
      LoanName: 'Personal Loan',
      Balance: 1927,
      Interest: 376,
      RepaymentFee: 76,
      Payout: 1889,
      IsExpanded: false
    };
    const wrapper = shallow(<Loan loan={loan} />);
    expect(wrapper.find('.wrapper')).toBeDefined();
    expect(wrapper.find('.card')).toHaveLength(1);
  });

  it('renders a list item', () => {
    const loan = {
      Id: 1,
      LoanName: 'Personal Loan',
      Balance: 1927,
      Interest: 376,
      RepaymentFee: 76,
      Payout: 1889,
      IsExpanded: false
    };
    const wrapper = shallow(<Loan loan={loan} />);

    expect(
      wrapper.contains(<div className="card-header">1. Personal Loan</div>)
    ).toBeTruthy();
  });
});
