import React from 'react';
import { connect } from 'react-redux';
import selectExpenses from '../selectors/expenses';
import selectExpensesTotal from '../selectors/expenses-total';
import numeral from 'numeral';


export const ExpensesSummaryPage = ({expensesAmount,expensesTotal}) => {

    const expensesWord = expensesAmount === 1 ? 'expense' : 'expenses';
    const expensesTotalFormated = numeral(expensesTotal / 100).format('$0,0.00');
    return (
<div>
    <h1>viewing {expensesAmount} {expensesWord} totaling {expensesTotalFormated}</h1>
    </div>
    );
};


const mapStateToProps = (state) => {

    const expenses = selectExpenses(state.expenses, state.filters);
    return {
        expensesAmount : expenses.length ,
      expensesTotal : selectExpensesTotal(expenses)
    };
  };
  
  export default connect(mapStateToProps)(ExpensesSummaryPage);
  