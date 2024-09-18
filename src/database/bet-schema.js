import conn from "./conn.js";

const Schema = conn.Schema;

const betSchema = new Schema({
    user: {
        type: Schema.Types.ObjectId,
        ref: "User"
    },
    value: {
        type: Schema.Types.Number,
        required: true,
        min: 1
    },
    status: {
        type: Schema.Types.String,
        enum: ["WON", "LOST", "TIED"],
        required: true,
    },
    paymentStatus: {
        type: Schema.Types.String,
        enum: ["FINISHED", "PENDING", "REFUSED", "CANCELLED"],
        default: "PENDING",
    },
}, {
    timestamps: true
})

export default betSchema