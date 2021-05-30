import mongoose from 'mongoose';

const expenseSchema = mongoose.Schema({ 
    title:String,
    amount: String,
    category: String,
    date: {
        type: Number,
        default: new Date()
    }
});

const ExpenseMessage = mongoose.model('ExpenseMessage', expenseSchema);

export default ExpenseMessage;