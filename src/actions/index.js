import axios from 'axios';

export function fetAllLoans() {
  return dispatch => {
    return axios.get('http://localhost:55132/api/loan').then(response => {
      dispatch(setLoans(response.data));
    });
  };
}

export function setLoans(loans) {
  return {
    type: 'FETCH_LOANS',
    loans: loans
  };
}

export function selectedLoan(loan, loans) {
  return dispatch => {
    return dispatch({
      type: 'EXPAND_COLLAPSE',
      ...loan,
      IsExpanded: !loan.IsExpanded
    });
  };
}
