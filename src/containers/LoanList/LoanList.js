import React from 'react';
import { connect } from 'react-redux';
import * as actionCreators from '../../actions/index';
import Loan from '../../components/Loan/Loan';

class LoanList extends React.Component {
  componentWillMount() {
    this.props.fetAllLoans();
  }
  render() {
    return (
      <div>
        <div className="flex-wrapper">
          <div className="flex-container">
            <div className="notification-wrapper">
              <span className="loan-count">
                You have {this.props.loanCount} Personal Loans
              </span>
            </div>
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
          <div className="flex-container wrapper">
            <div>
              {this.props.loanCount >= 3 ? (
                <div className="alert-box">
                  With 3 or more current Personal Loans, a new Loan application
                  is not possible in this flow
                </div>
              ) : (
                <span />
              )}
            </div>
            <p>
              CarryOver / Payout Amount: <b>{this.props.payout}</b>
            </p>
            <br />
            <input
              type="button"
              className={
                this.props.payout > 0
                  ? 'button button5'
                  : 'button button5 disabled'
              }
              value="Apply for Increased Loan Amounts"
            />
            <input
              type="button"
              className={
                this.props.loanCount >= 3
                  ? 'button button5 disabled'
                  : 'button button5'
              }
              value="Apply for new Loan"
            />
          </div>
        </div>
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
