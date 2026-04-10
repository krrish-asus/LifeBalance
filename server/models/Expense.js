const mongoose = require('mongoose');

const expenseSchema = new mongoose.Schema({
  userId: String,
  amount: Number
});

module.exports = mongoose.model('Expense', expenseSchema);