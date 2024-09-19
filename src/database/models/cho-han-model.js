import conn from "../conn.js";
import betSchema from "../bet-schema.js";

const Schema = conn.Schema;

const ChoHanBetSchema = new Schema({
  bet: betSchema,
  betNumber: {
    type: Schema.Types.Number,
    required: true,
    min: 1,
    max: 100,
  },
  drawnNumber: {
    type: Schema.Types.Number,
    required: true,
    min: 1,
    max: 100,
  },
});

const ChoHanBet = conn.model("ChoHanBet", ChoHanBetSchema);

export default ChoHanBet;
