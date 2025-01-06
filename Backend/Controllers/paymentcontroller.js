const crypto = require('crypto');

exports.initiatePayment = async (req, res) => {
    try {
        const { amount, appointmentId } = req.body;

        if (!amount || !appointmentId) {
            return res.status(400).json({ message: 'Amount and Appointment ID are required' });
        }

        const options = {
            amount: amount * 100, // Convert to paisa
            currency: 'INR',
            receipt: `receipt_${appointmentId}`,
        };

        const order = await razorpay.orders.create(options);

        // Save order details to DB
        const payment = new Payment({
            appointmentId,
            razorpayOrderId: order.id,
            amount,
        });
        await payment.save();

        res.status(200).json({
            success: true,
            orderId: order.id,
            amount: order.amount,
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Failed to initiate payment' });
    }
};

exports.verifyPayment = async (req, res) => {
    try {
        const { razorpayOrderId, razorpayPaymentId, razorpaySignature } = req.body;

        const body = razorpayOrderId + '|' + razorpayPaymentId;
        const expectedSignature = crypto
            .createHmac('sha256', process.env.RAZORPAY_KEY_SECRET)
            .update(body.toString())
            .digest('hex');

        if (expectedSignature === razorpaySignature) {
            const payment = await Payment.findOneAndUpdate(
                { razorpayOrderId },
                {
                    razorpayPaymentId,
                    razorpaySignature,
                    status: 'Successful',
                },
                { new: true }
            );

            if (!payment) {
                return res.status(404).json({ message: 'Payment record not found' });
            }

            res.status(200).json({ success: true, payment });
        } else {
            res.status(400).json({ message: 'Payment verification failed' });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Failed to verify payment' });
    }
};