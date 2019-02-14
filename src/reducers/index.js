let defaultState = {
  loans: [],
  payout: 0,
  loanSelectedCount: 0
};

const mainReducer = (state = defaultState, action) => {
  if (action.type === 'FETCH_LOANS') {
    return {
      ...state,
      loans: action.loans
    };
  } else if (action.type === 'EXPAND_COLLAPSE') {
    let payout = 0;
    state.loans.map(loan => {
      if (loan.IsExpanded === true) {
        payout = payout + loan.Payout;
      }
      return true;
    });
    if (action.IsExpanded === true) payout = payout + action.Payout;
    else {
      payout = payout - action.Payout;
    }
    return {
      loans: state.loans.map(loan => {
        if (loan.Id === action.Id)
          return {
            ...loan,
            IsExpanded: !loan.IsExpanded
          };
        return loan;
      }),
      payout: payout
    };
  } else {
    return {
      ...state
    };
  }
};

export default mainReducer;
