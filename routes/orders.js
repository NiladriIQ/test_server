import express from 'express';
import Razorpay from 'razorpay';
import crypto from 'crypto';


const router = express.Router();

router.post('/', async (req, res) => {
    if (!req?.body) res.status(400).send("Bad Request");
    const { ammount, currency, receptId } = req.body;

    const razorpay = new Razorpay({
        key_id: process.env.RAZORPAY_KEY_ID,
        key_secret: process.env.RAZORPAY_KEY_SECRET,
    });

    const options = {
        amount: ammount * 100,  // amount in the smallest currency unit
        currency: currency,
        receipt: receptId
    };
    try {
        const order = await razorpay.orders.create(options);
        console.log(order);
        if (!order) res.status(400).send("Bad Request");
        res.status(201).json(order);

    } catch (error) {
        console.log(error);
        res.status(500).send(error);
    }

});

router.post('/validate', async (req, res) => {
    const { razorpay_payment_id, razorpay_order_id, razorpay_signature } = req.body;

    try {
        //creating hmac object 
        let hmac = crypto.createHmac('sha256', process.env.RAZORPAY_KEY_SECRET);
        //passing the data to be hashed
        let data = hmac.update(razorpay_order_id + "|" + razorpay_payment_id);
        //Creating the hmac in the required format
        let gen_hmac = data.digest('hex');
        // let gen_hmac = crypto.createHmac('sha256', process.env.RAZORPAY_KEY_SECRET).update(razorpay_order_id + "|" + razorpay_payment_id).digest("hex");

        if (gen_hmac !== razorpay_signature) res.status(400).send({ msg: 'Transaction is not legit!' });
        res.status(200).send({ msg: 'Transaction is legit!', order_id: razorpay_order_id, payment_id: razorpay_payment_id });  // payment is successful

    } catch (error) {
        console.log(error);
        res.status(500).send(error);
    }

});

export default router;