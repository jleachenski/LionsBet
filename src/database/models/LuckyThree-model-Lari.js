import conn from "../conn.js"
const Schema = conn.Schema;

const betSchema = new Schema({ //numeros da aposta
  numbers: {
    type: Schema.Types.Number,
    validator: function(v) {
        return v.length === 3 && v.every(num => num >= 1 && num <= 30)   
    }, 
    required: true
    },
    bet: {
      type: Schema.Types.Number,
      required : true
    }
})


export default betSchema;


