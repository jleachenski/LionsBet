import conn from "../conn.js"
import betSchema from "../bet-schema.js"

const Schema = conn.Schema;

const LuckyThreeSchema = new Schema({ //numeros da aposta
  bet: betSchema,

  Numbers: {
    type: [Schema.Types.Number],
    required: true,
    validator: {
      validator: function(v){
        return v.length === 3;
      },
      message: "Voce deve escolher 3 numeros"
    }

  },

  DrawnNumbers: {
    type: [Schema.Types.Number],
    required: true
    },

    BetAmount: {
      type: Schema.Types.Number,
      required: true,
      min: 1,
    },
    
    Prize: {
      type: Schema.Types.Number,
      default: 0
    }
})

const LuckyThreeBet = conn.model("LuckyThreeBet", LuckyThreeSchema)

export default LuckyThreeBet;


