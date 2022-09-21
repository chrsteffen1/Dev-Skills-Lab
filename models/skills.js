import mongoose from "mongoose";

const Schema = mongoose.Schema

const skillsSchema = new Schema ({
  text: String,
  learned: Boolean,
})

const Skills = mongoose.model('Skills', skillsSchema)

export {
  Todo
}