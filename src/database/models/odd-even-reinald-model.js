import mongoose from "mongoose";

const OddEvenBetSchema = new mongoose.Schema({
  numbers: [Number],
  status: String,
  bet: Object,
});

const OddEvenBet = mongoose.model("OddEvenBet", OddEvenBetSchema);
export default OddEvenBet;
