import conn from "../conn.js";
import betSchema from "../bet-schema.js";

const Schema = conn.Schema;

const DiceBetSchema = new Schema({
  numbers: {
    type: [Schema.Types.Number],
    validate: (v) => v.length == 1,
    required: true,
  },
  bet: betSchema,
});
const DiceBet = conn.model("DiceBet", DiceBetSchema);

export default DiceBet;
