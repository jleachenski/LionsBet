import conn from "../conn.js";
import betSchema from "../bet-schema.js";

const Schema = conn.Schema;

const sicBoBetSchema = new Schema({
    
    sizeBet: {
        type: Schema.Types.String,
        enum: ["SMALL", "BIG"],//4 a 10 ou 11 a 18
        required: true,
    },
    
    diceResult: {
        type: [Schema.Types.Number],
        validate: (v) => v.length == 3,
        required: true,
    },
    bet: betSchema,
}, {
  timestamps: true,
});

const SicBoBet = conn.model("SicBoBet", sicBoBetSchema);

export default SicBoBet;
