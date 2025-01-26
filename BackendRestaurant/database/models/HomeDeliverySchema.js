import mongoose from "mongoose";

const HomeDelivery = new mongoose.Schema({
	customerDetails: {
		name: {
			type: String,
			required: true,
		},
		mobile: {
			type: String,
			required: true,
		},
		address: {
			type: String,
			required: true,
		},
	},
	cart: [
		{
			name: {
				type: String,
				required: true,
			},
			price: {
				type: Number,
				required: true,
			},
			quantity: {
				type: Number,
				required: true,
			},
		},
	],
	totalAmount: {
		type: Number,
		required: true,
	},
	orderDate: {
		type: Date,
		default: Date.now(),
	},
	status: {
		type: String,
		enum: ["pending", "In-progress", "Completed", "cancelled"],
		default: "pending",
	},
});

const HomeDeliveryOrder = mongoose.model('HomeDeliveryOrder', HomeDelivery);
export default HomeDeliveryOrder;