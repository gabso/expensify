import React from 'react';
import { shallow } from 'enzyme';
import expenses from '../fixtures/expenses';
import {ExpensesSummaryPage} from '../../components/ExpensesSummaryPage';

test('should render ExpensesSummaryPage correctly with 1 report tatling 1.95$', () => {
  const wrapper = shallow(<ExpensesSummaryPage expensesAmount={1} expensesTotal={195} />);
  expect(wrapper).toMatchSnapshot();
});

test('should render ExpensesSummaryPage correctly with 2 report tatling 1140$', () => {
    const wrapper = shallow(<ExpensesSummaryPage expensesAmount={2} expensesTotal={114000} />);
    expect(wrapper).toMatchSnapshot();
  });
