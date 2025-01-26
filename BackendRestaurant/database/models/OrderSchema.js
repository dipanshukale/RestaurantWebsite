import mongoose from "mongoose";


const OrderSchema = new mongoose.Schema({
	customerName: {
		type: String,
		required: true,
	},
	mobileNumber: {
		type: Number,
		required: true,
		min: 10,
	},
	orderSummary: [
		{
			name: { type: String, required: true },
			price: { type: Number, required: true },
			quantity: { type: Number, required: true },
			totalPrice: { type: Number, required: true },
		},
	],
	subtotal: {
		type: Number,
		required: true,
	},
	status: {
		type: String,
		enum: ["pending", "In-progress", "Completed", "cancelled"],
		default: "pending",
	},
});

const Order = mongoose.model('Order', OrderSchema);
export default Order;