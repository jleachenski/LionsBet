import { SchemaType } from "mongoose";
import db from "../conn.js";

const Schema = db.Schema;


const deckSchema = new Schema ({
    cards: {
        enum: [0, 1, 2, 3],
        enum: ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "Q", "J", "K"]
    },
    value: {

    }
}) 

const gameSchema = new Schema ({
    UserId: Schema.Types.ObjectId,
    deck: Schema.Types.ObjectId,
    hand: Schema.Types.ObjectId,
    bet: Number,
    result: String,
})