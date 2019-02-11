import React from 'react';
import { connect } from 'react-redux';
import * as actionCreators from '../actions/index';
import Loan from '../components/Loan/Loan';

class LoanList extends React.Component {
  componentWillMount() {
    this.props.fetAllLoans();
  }
  render() {
    return (
      <div className="wrap">
        <div>
          CarryOver / Payout Amount: <b>{this.props.payout}</b>
        </div>
        <input
          type="button"
          value="Apply for Increased Loan Amounts"
          disabled={!this.props.payout > 0}
        />
        <input
          type="button"
          value="Apply for new Loan"
          disabled={this.props.loanCount >= 3}
        />
        {this.props.loans.map((loan, index) => {
          return (
            <div key={index}>
              <Loan
                loan={loan}
                handleClick={() =>
                  this.props.selectedLoan(loan, this.props.loans)
                }
              />
            </div>
          );
        })}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    loans: state.loans,
    payout: state.payout,
    loanCount: state.loans.length
  };
};

export default connect(
  mapStateToProps,
  actionCreators
)(LoanList);
