import mongoose from 'mongoose';

/**
 * Database Record Interface.
 * @interface IRecordDb
 */
interface IRecordDb {
  key: string;
  createdAt: Date;
  counts: [number];
  value: string;
}

const records = new mongoose.Schema({
  key: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    required: true,
  },
  counts: {
    type: [Number],
    required: true,
  },
  value: {
    type: String,
    required: true,
  },
});

const Records = mongoose.model<IRecordDb>('Records', records);

export {Records, IRecordDb};
