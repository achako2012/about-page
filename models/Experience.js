import pkg from 'mongoose';

const {Schema, model} = pkg;

const schema = new Schema({
    title: {
        type: String,
        required: true
    },
    position: {
        type: String,
        required: true
    },
    dateStart: {
        type: String,
        required: false
    },
    dateFinish: {
        type: String,
        required: false
    },
    obligations: {
        type: [String],
        required: true
    }
})

export default model('Experience', schema)