import mongoose from "mongoose";

const orderStatusEnum = {
  PENDING: "pending",
  PROCESSING: "processing",
  PICKED: "picked",
  SHIPPED: "shipped",
  CANCELED: "canceled",
};

const OrderSchema = new mongoose.Schema(
  {
    orderItems: [
      {
        name: { type: String, required: true },
        quantity: { type: Number, required: true },
        url: { type: String, required: true },
        price: { type: Number, required: true },
        product: {
          // Verweis auf die _id eines anderen Dokuments in der DB (products collection)
          // Es ermöglicht das Verknüpfen von Dokumenten
          type: mongoose.Schema.Types.ObjectId,
          ref: "Product",
          required: true,
        },
      },
    ],
    totalPrice: {
      type: Number,
      required: true,
    },
    isPaid: {
      type: Boolean,
      default: false,
    },
    status: {
      type: String,
      enum: Object.values(orderStatusEnum),
      default: orderStatusEnum.PENDING,
    },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
  },

  { timestamps: true }
);

export default mongoose.model("Order", OrderSchema);
