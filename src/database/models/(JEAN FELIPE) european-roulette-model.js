import conn from "../conn.js"
import betSchema from "../bet-schema.js"

const Schema = conn.Schema

const europeanRouletteSchema = new Schema ({
    bet: betSchema,
    attemptCollor: {
        type: Schema.Types.Number,
        required: true,
        min: 1,
        max: 3
    },
    attemptRoulette: {
        type: Schema.Types.Number,
        required: true,
        min: 1,
        max: 36
    }
})

const EuropeanRoulette = conn.model("EuropeanRoulette", europeanRouletteSchema)

export default EuropeanRoulette