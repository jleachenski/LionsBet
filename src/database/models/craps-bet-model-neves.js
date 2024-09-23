import conn from "../conn.js";
import betSchema from "../bet-schema.js";

const Schema = conn.Schema;

const crapsSchema = new Schema({
    roll:{
        type: Schema.Types.Number,
        required: true,
        max: 3,
        min: 1
    },
    dice1:{
        type: Schema.Types.Number,
        required: true,
        max: 6,
        min: 1
    },
    dice2:{
        type: Schema.Types.Number,
        required: true,
        max: 6,
        min: 1
    },
    bet: betSchema
});

const Craps = conn.model("Craps", crapsSchema);

export default Craps;