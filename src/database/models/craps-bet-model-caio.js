import conn from "../conn.js";
import betSchema from "../bet-schema.js";

const Schema = conn.Schema;

const crapsBetSchema = new Schema({
  dados: {
    type: [Schema.Types.Number],
  },
  bet: betSchema,
});

const CrapsBet = conn.model("CrapsBet", crapsBetSchema);

export default CrapsBet;
