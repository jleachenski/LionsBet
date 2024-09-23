import conn from "../conn.js";
import betSchema from "../bet-schema.js";

const Schema = conn.Schema;

const ChoHanBetSchema = new Schema({
  bet: betSchema,
  betChohan: {
    type: Schema.Types.String,
    validate: (v) => v == "odd" || "even",
    required: true,
  },
});

const ChoHanBet = conn.model("ChoHanBet", ChoHanBetSchema);

export default ChoHanBet;
