// import mongoose
const mongoose = require("mongoose")

// invoke Schema constructor
const Schema = mongoose.Schema

// create new Schema instance
const GenreSchema = new Schema({
    // field, type, range and required
    name: { type: String, minLength: 3, maxLength: 100, required: true }
})

// Virtual property
GenreSchema.virtual("url").get(function() {
    return `/catalog/genre/${this._id}`
})

// export Model
module.exports = mongoose.model("Genre", GenreSchema)