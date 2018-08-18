import selectExpensesTotal from '../../selectors/expenses-total';
import expenses from '../fixtures/expenses';

test('should return 0 if no expnses', () => {
  const result = selectExpensesTotal([]);
  expect(result).toBe(0);
});

test('should reduce 1 expense', () => {
    const result = selectExpensesTotal([expenses[0]]);
    expect(result).toBe(195);
  });

  test('should reduce mutiple expenses', () => {
    const result = selectExpensesTotal(expenses);
    expect(result).toBe(114195);
  });