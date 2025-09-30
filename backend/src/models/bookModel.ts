import { model, Schema } from "mongoose"

const bookSchema = new Schema({
 name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  role: { type: String, enum: ["admin","user"], default: "user" },
  createdAt: { type: Date, default: Date.now() }
})

export default model("Book" , bookSchema)