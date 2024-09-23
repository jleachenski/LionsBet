import conn from "../conn.js";
import betSchema from "../bet-schema.js";


const Schema = conn.Schema;


const crapsBetSchema = new Schema({
  bet: betSchema,
  betNumber: {
    type: Schema.Types.Number,
    required: true,
    min: 2,
    max: 12
  },
  drawnNumber: {
    type: Schema.Types.Number,
    required: true,
    min: 2,
    max: 12
  },
});


const CrapsBet = conn.model("CrapsBet", crapsBetSchema);


export default CrapsBet;
