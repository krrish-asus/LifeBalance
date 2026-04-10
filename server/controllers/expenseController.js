const Expense = require('../models/Expense');

exports.addExpense = async (req, res) => {
  const { amount } = req.body;

  const expense = await Expense.create({
    userId: req.user.id,
    amount
  });

  res.json(expense);
};

exports.getExpenses = async (req, res) => {
  const expenses = await Expense.find({ userId: req.user.id });
  res.json(expenses);
};