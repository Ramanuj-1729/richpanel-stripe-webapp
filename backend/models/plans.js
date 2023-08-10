import mongoose from "mongoose";
const Schema = mongoose.Schema;

const plansSchema = new Schema({
    title: { type: String, required: true },
    duration: { type: String, required: true },
    price: { type: Number, required: true },
    quality: { type: String, required: true },
    resolution: {type: String, required: true},
    devices: {type: Array, default: [], required: true}
}, { timestamps: true });

export default mongoose.model('Plan', plansSchema, 'plans');