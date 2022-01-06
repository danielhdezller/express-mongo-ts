import mongoose from "mongoose";

interface IBase {
    startDate: Date;
    endDate: Date;
    minCount: number;
    maxCount: number;
}

const baseSchema = new mongoose.Schema({
    startDate: {
        type: Date,
        required: true
    },
    endDate: {
        type: Date,
        required: true
    },
    minCount: {
        type: Number,
        required: true
    },
    maxCount: {
        type: Number,
        required: true
    },
});

const Base = mongoose.model("Base", baseSchema);
export { Base};
