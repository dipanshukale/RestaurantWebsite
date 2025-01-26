import "../BackendRestaurant/database/connection.js";
import express, { request, response } from "express";
import cors from "cors";
import { config } from "dotenv";
import bodyParser from "body-parser";
import twilio from "twilio";
import Order from "../BackendRestaurant/database/models/OrderSchema.js"
import HomeDeliveryOrder from "./database/models/HomeDeliverySchema.js";

config({ path: "./config.env" });

const app = express();
app.use(express.json());
app.use(bodyParser.json());

// Configure CORS
app.use(
	cors({
		origin: ["https://restaurantwebsite-frontend.onrender.com", "https://restaurantwebsite-adminpanel.onrender.com"],
		methods: ["POST", "GET", "DELETE", "PUT"],
		credentials: true,
	})
);

// Twilio credentials from .env file
const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const twilioPhoneNumber = process.env.TWILIO_PHONE_NUMBER;
const client = twilio(accountSid, authToken);

// Temporary in-memory store for OTPs
const otpStore = new Map();

// Helper function to generate OTP
function generateOTP() {
	return Math.floor(100000 + Math.random() * 900000).toString();
}

// Route to send OTP
app.post("/send-otp", async (req, res) => {
	const { mobile } = req.body;

	if (!mobile || mobile.length !== 10) {
		return res.status(400).json({ message: "Invalid mobile number" });
	}

	const otp = generateOTP();

	try {
		// Send OTP via Twilio
		await client.messages.create({
			body: `OTP has send by Dipanshu Kale And Your OTP is ${otp}`,
			from: twilioPhoneNumber,
			to: `+91${mobile}`,
		});

		// Store OTP temporarily with a timestamp
		otpStore.set(mobile, { otp, timestamp: Date.now() });
		res.status(200).send({ message: "OTP sent successfully" });
	} catch (error) {
		console.error("Error sending OTP:", error);
		res.status(500).json({ message: "Failed to send OTP" });
	}
});

// Route to verify OTP
app.post("/verify-otp", (req, res) => {
	const { mobile, otp } = req.body;

	if (!mobile || mobile.length !== 10) {
		return res.status(400).json({ message: "Invalid mobile number" });
	}

	if (!otp || otp.length !== 6) {
		return res.status(400).json({ message: "Invalid OTP format" });
	}

	const storedData = otpStore.get(mobile);

	if (!storedData) {
		return res.status(400).json({ message: "OTP not sent or expired" });
	}

	const { otp: storedOtp, timestamp } = storedData;

	// Check OTP expiration (5 minutes)
	const currentTime = Date.now();
	if (currentTime - timestamp > 60 * 1000) {
		otpStore.delete(mobile);
		return res.status(400).json({ message: "OTP has expired" });
	}

	if (storedOtp !== otp) {
		return res.status(400).json({ message: "Incorrect OTP" });
	}

	// OTP verified successfully
	otpStore.delete(mobile); // Clear OTP after successful verification
	res.status(200).send({ success: true, message: "OTP verified successfully" });
})

app.post("/confirm-order", async (req, res) => {
	console.log("Request received at /confirm-order:", req.body);
	try {
		const { customerName, mobileNumber, orderSummary, subtotal} = req.body;

		if (!customerName) {
			return res.status(400).json({ error: "Name is required" });
		}
		if (!mobileNumber || mobileNumber.toString().length !== 10) {
			return res.status(400).json({ error: "Phone must be a 10-digit number" });
		}
		if (
			!orderSummary ||
			!Array.isArray(orderSummary) ||
			orderSummary.length === 0
		) {
			return res
				.status(400)
				.json({
					error: "Order summary is required and should be a non-empty array",
				});
		}


		console.log("Adding order to database");
		const customerOrder = new Order({
			customerName,
			mobileNumber,
			orderSummary,
			subtotal,
		});

		await customerOrder.save();
		console.log("Order saved successfully" ,req.body);
		res
			.status(200)
			.send({ success: true, message: "Order confirmed successfully" });
	} catch (error) {
		console.error("Error saving order:", error.message);
		res.status(500).json({ success: false, message: "Order rejected" });
	}
});

app.post("/home-delivery", async (req, res) => {
	try {
		const { customerDetails, cart } = req.body;

		if (!customerDetails || !cart) {
			return res
				.status(404)
				.json({ success: false, message: "Invalid customer details" });
		}

		const totalAmount = cart.reduce(
		(total, item) => total + item.price * item.quantity,
			0
		);

		console.log(totalAmount);

		const deliveryOrder = new HomeDeliveryOrder({
			customerDetails,
			cart,
			totalAmount,
		});

		console.log(
			"Order Placed successfully here is customer details",
			deliveryOrder.totalAmount,
			"Here is total Amount of your order",
			totalAmount
		);

		await deliveryOrder.save();
		res.status(200).send({ success: true, message: "Order Placed successfully" });
	} catch (error) {
		console.error(error.message);
		res.status(500).json({ success: false, message: error.message });
	}
});

app.get("/orders", async(req, res) => {
	try {
		const orders = await Order.find();
		res.status(200).json({ success: true, data: orders });
	} catch (error) {
		console.error(error.message);
		res.status(500).json({ success: false, message: error.message });
	}
})

//to get the order 
app.get("/home-delivery-orders",async(req, res) => {
	try {
		const orders = await HomeDeliveryOrder.find();
		res.status(200).json({ success: true, data: orders });
	} catch (error) {
		console.error(error.message);
		res.status(500).json({ success: false, message: error.message });
	}
})

app.delete("/home-delivery-orders/:id", async(req, res) => {
	const { id } = req.params;

	try {
		const deleteOrder = await HomeDeliveryOrder.findByIdAndDelete(id);
		if (!deleteOrder) {
			return res.status(404).json({ success: false, message: "Order not found" });
		}
		res.status(200).json({ success: true, message: "Order deleted successfully" });
	} catch (error) {
		res.status(400).json({ success: false, message: error.message });
	}

});

app.delete("/orders/:id", async (req, res) => {
	const { id } = req.params;
	
	try {
		const deleteOrder = await Order.findByIdAndDelete(id);
		if (!deleteOrder) {
			return res.status(404).json({ success: false, message: "Order not found" });
		}
		res.status(200).json({ success: true, message: "Order deleted successfully" });
	} catch (error) {
		res.status(404).json({ success: false, message: "Error while deleting order" });
	}
})


app.put("/home-delivery-orders/status/:id", async(req, res) => {
	const { id } = req.params;
	const { status } = req.body;

	try {
		const updateOrder = await HomeDeliveryOrder.findByIdAndUpdate(id, { status });
		if (!updateOrder) {
			return res.status(404).json({ success: false, message: "Order not found" });
		}
		res.status(200).json({ success: true, data: "Order status updated successfully" });
	} catch (error) {
		res.status(400).json({ success: false, error: error.message });
	}
});

app.put("/orders/status/:id", async(req, res) => {
	const { id } = req.params;
	const { status } = req.body;

	try {
		const updateOrder = await Order.findByIdAndUpdate(id, { status });

		if (!updateOrder) {
			return res.status(404).json({ success: false, message: "Order not found" });
		}

		res.status(200).json({ message: "Order updated successfully", data: updateOrder });
	} catch (error) {
		res.status(400).json({ message: "Error updating order", error: error.message });
	}
})


// Start the server
app.listen(process.env.PORT, () => {
	console.log("Server running on port " + process.env.PORT);
});
