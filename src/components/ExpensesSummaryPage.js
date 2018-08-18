import React from 'react';
import { connect } from 'react-redux';
import selectExpenses from '../selectors/expenses';
import selectExpensesTotal from '../selectors/expenses-total';
import numeral from 'numeral';


export const ExpensesSummaryPage = (props) => (
<div>{`${props.expenses.length} : ${numeral(props.expensesTotal / 100).format('$0,0.00')}`}</div>
);


const mapStateToProps = (state) => {

    const expenses = selectExpenses(state.expenses, state.filters);
    return {
      expenses,
      expensesTotal : selectExpensesTotal(expenses)
    };
  };
  
  export default connect(mapStateToProps)(ExpensesSummaryPage);
  