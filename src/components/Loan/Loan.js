import React from 'react';
import './Loan.css';
const loan = props => (
  <div className="wrapper">
    <div className="card">
      <div className="card-header">
        {props.loan.Id}. {props.loan.LoanName}
      </div>
      <div className="card-main">
        <span className="col1">Balance</span>
        <span className="col2">${props.loan.Balance}</span>
        <label className="col3 pure-material-checkbox">
          <input
            type="checkbox"
            onClick={() => {
              props.handleClick();
            }}
          />
          <span>Top Up</span>
        </label>
      </div>
      <div className={props.loan.IsExpanded ? '' : 'hidden'}>
        <div className="card-detail border-top">
          <span className="col1">Balance includes interest of</span>
          <span className="col2">${props.loan.Interest}</span>
        </div>
        <div className="card-detail">
          <span className="col1">Early repayment fee</span>
          <span className="col2">${props.loan.RepaymentFee}</span>
        </div>
        <div className="card-detail">
          <span className="col1">Payout / Carryover amount</span>
          <span className="col2">
            <b>${props.loan.Payout}</b>
          </span>
        </div>
      </div>
    </div>
  </div>
);
export default loan;
