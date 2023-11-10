import mongoose from "mongoose";
const Schema = mongoose.Schema;

const clientSchema = new Schema(
  {
    firstName: {
      type: String,
      required: true,
    },
    lastName: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    mobileNumber: {
      type: String,
      required: true,
    },
    role: {
      type: String,
      required: true,
      enum: ["Customer", "Delivery Man", "Inventory Keeper"],
      default: "Customer",
    },
    vehicleNo: {
      type: String,
    },
    address: {
      type: String,
    },
    profilePic: {
      type: String,
    },
  },

  { timestamps: true }
);

export default mongoose.model("User", clientSchema);
