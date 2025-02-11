import mongoose from "mongoose";

const DownloadSchema = new mongoose.Schema({
  count: { type: Number, default: 0 },
});

export default mongoose.models.Download || mongoose.model("Download", DownloadSchema);
