import React, { Component } from 'react';
import LoanList from './containers/LoanList';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <h3>Personal Loan Topup or Apply</h3>
        <p className="border-top">
          To apply for a TopUp of an existing loan amount, please select the
          loan below, make note of the Carry-over amount before proceeding
        </p>
        <LoanList />
      </div>
    );
  }
}

export default App;
