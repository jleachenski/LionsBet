import conn from "../conn.js";
import betSchema from "../bet-schema.js";

const Schema = conn.Schema;

const prizeBetSchema = new Schema({
  diceResult: {
    type: Schema.Types.Number,
    required: true,
  },
  userNumber: {
    type: Schema.Types.Number,
    required: true,
    min: 3,
    max: 18
  },
  bet: betSchema,
});

const PrizeBet = conn.model("PrizeBet", prizeBetSchema);

export default PrizeBet;
