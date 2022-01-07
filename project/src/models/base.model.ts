import mongoose from 'mongoose';
import {IRequestRecords} from '../interfaces/IRequests';

const baseSchema = new mongoose.Schema({
  startDate: {
    type: String,
    required: true,
  },
  endDate: {
    type: String,
    required: true,
  },
  minCount: {
    type: Number,
    required: true,
  },
  maxCount: {
    type: Number,
    required: true,
  },
});

const Base = mongoose.model<IRequestRecords>('Base', baseSchema);

export {Base, IRequestRecords};
