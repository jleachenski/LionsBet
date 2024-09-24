import conn from "../conn.js";
import betSchema from "../bet-schema.js";

const Schema = conn.Schema;

const headTailsSchema = new Schema ({
    bet: betSchema,
    betChoose: {
        type: Schema.Types.Number,
        required: true,
        min: 1,
        max: 2
    },
    coinValue: {
        type: Schema.Types.Number,
        required: true,
        min: 1,
        max: 2
    }
})

const headTailsBet = conn.model("HeadTailsBet", headTailsSchema);

export default headTailsBet
