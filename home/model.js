const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const homeSchema = new Schema({
    streetAddress: { type: String },
    city: { type: String },
    state: { type: String }
},
    {
        toJSON: {
            virtuals: true
        },
        toObject: {
            virtuals: true
        },
        timestamps: true
    });

module.exports = mongoose.model('Home', homeSchema);