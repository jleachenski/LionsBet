import mongoose from 'mongoose';

const lotterySchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    drawDate: {
        type: Date,
        required: true,
    },
    winningNumbers: {
        type: [Number],
        required: true,
    },
    prize: {
        type: Number,
        required: true,
    }
});

const Lottery = mongoose.model('Lottery', lotterySchema);

export default Lottery;