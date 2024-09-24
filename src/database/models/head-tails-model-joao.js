import conn from "../conn.js";
import betSchema from "../bet-schema.js";

const Schema = conn.Schema;

const headTailsSchema = new Schema ({
    bet: betSchema,
    betChoose: {
        type: Schema.Types.String,
        required: true,
        enum: ["CARA", "COROA"]
    },
    coinValue: {
        type: Schema.Types.String,
        required: true,
        enum: ["CARA", "COROA"]
    }
})

const headTailsBet = conn.model("HeadTailsBet", headTailsSchema);

export default headTailsBet
