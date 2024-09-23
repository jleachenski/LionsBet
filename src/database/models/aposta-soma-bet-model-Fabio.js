import conn from '../conn.js';
import betSchema from '../bet-schema.js';

const Schema = conn.Schema;

const apostaSomaBetSchema = new Schema({
    betNumber: {
        type: Schema.Types.Number,
        min: 3,
        max: 27,
        required: true
    },
    drawnNumber: {
        type: Schema.Types.Number,
        min: 3,
        max: 27
    },
    bet: betSchema
});

const ApostaSomaBet = conn.model('/ApostaSomaBet', apostaSomaBetSchema);

export default ApostaSomaBet;