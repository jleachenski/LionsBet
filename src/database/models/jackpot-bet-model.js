import conn from "../conn.js";
import betSchema from "../bet-schema.js";

const Schema = conn.Schema;

const jackpotBetSchema = new Schema({
  numbers: {
    type: [Schema.Types.Number],
    validate: (v) => v.length == 3,
    required: true,
  },
  bet: betSchema,
});

const JackpotBet = conn.model("JackpotBet", jackpotBetSchema);

export default JackpotBet;
