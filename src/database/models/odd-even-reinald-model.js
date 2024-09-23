import conn from "../conn.js";
import betSchema from "../bet-schema.js";
const OddEvenBetSchema = new conn.Schema({
  numbers: Number,
  status: String,
  bet: betSchema,
});

const OddEvenBet = conn.model("OddEvenBet", OddEvenBetSchema);
export default OddEvenBet;
