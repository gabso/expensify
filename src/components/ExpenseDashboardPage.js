import React from 'react';
import ExpenseList from './ExpenseList';
import ExpenseListFilters from './ExpenseListFilters';
import ExpensesSummaryPage from './ExpensesSummaryPage';

const ExpenseDashboardPage = () => (
  <div>
    <ExpensesSummaryPage/>
    <ExpenseListFilters />
    <ExpenseList />
  </div>
);

export default ExpenseDashboardPage;
