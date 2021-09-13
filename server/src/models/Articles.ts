import pkg from 'mongoose';

const {Schema, model} = pkg;

const schema = new Schema({

    title: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        required: true
    },
    article: {
        type: String,
        required: true
    }
})

export default model('Articles', schema)