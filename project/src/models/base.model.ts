import mongoose from "mongoose";

interface IBase {
    startDate: string;
    endDate: string;
    minCount: number;
    maxCount: number;
}

const baseSchema = new mongoose.Schema({
    startDate: {
        type: String,
        required: true
    },
    endDate: {
        type: String,
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

const Base = mongoose.model<IBase>("Base", baseSchema);

export { Base, IBase };
