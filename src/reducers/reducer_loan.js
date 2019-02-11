let initialState = {
  payout: 0,
  loanSelectedCount: 0
};

export default function(state = initialState, action) {
  switch (action.type) {
    case 'LOAN_SELECTED':
      return action.payload;
    default:
      return state;
  }
}
