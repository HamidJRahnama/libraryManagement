import { model, Schema } from "mongoose"

const bookSchema = new Schema({
  title: { type: String, required: true },
  author: { type: String, required: true },
  genre: { type: [String], enum: ["Action", "Comedy", "Documentary", "Drama"] },
  available: { type: Boolean, default: true },
  createdAt: { type: Date, default: Date.now }
})

export default model("Book" , bookSchema)