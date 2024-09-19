import conn from "../conn.js";

const OddEvenBetSchema = new conn.Schema({
  numbers: [Number],
  status: String,
  bet: Object,
});

const OddEvenBet = conn.model("OddEvenBet", OddEvenBetSchema);
export default OddEvenBet;
