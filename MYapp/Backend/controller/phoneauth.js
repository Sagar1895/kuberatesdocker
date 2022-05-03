const router = require('express').Router();
const User = require('../model/user.model');

const config = {
    SERVICE_ID: "VA8507c563b479166dc948a9ca53ddfe61",
    ACCOUNT_SID: "AC37656761714148198900c4017313035c",
    AUTH_TOKEN: "97b553a969df91f7a63256fbd59cfd54"
}

const client = require('twilio')(config.ACCOUNT_SID, config.AUTH_TOKEN);

router.post('/sendOTP', async (req, res) => {
    if (req.body.phoneNumber) {
        const phoneNumberExist = await User.findOne({ phoneNumber: req.body.phoneNumber });
        if (!phoneNumberExist) {
            return res.status(400).json({ message: 'Please enter registered phone number' });
        }

        client.verify.services(config.SERVICE_ID).verifications.create(
            {
                to: `+91${req.body.phoneNumber}`,
                channel: req.body.receiveMode === 'call' ? 'call' : 'sms'
            }
        ).then(data => {
            if (req.body.receiveMode === 'sms') {
                res.status(200).json(
                    {
                        message: `OTP sent successfully`,
                        phoneNumber: req.body.phoneNumber,
                    }
                )
            } else {
                res.status(200).json(
                    {
                        message: `Calling ${req.body.phoneNumber}...`,
                        phoneNumber: req.body.phoneNumber
                    }
                )
            }

        }).catch(err => {
            res.status(400).json(err);
        });
    }
});

router.post('/verifyOTP', (req, res) => {
    if (req.body.phoneNumber && (req.body.otp).length === 6) {
        client.verify.services(config.SERVICE_ID).verificationChecks.create(
            {
                to: `+91${req.body.phoneNumber}`,
                code: req.body.otp
            }
        ).then(data => {
            if (data.status === "approved") {
                res.status(200).json(
                    {
                        verified: true,
                        message: "OTP is verified!!"
                    }
                );
            } else {
                res.status(400).json(
                    {
                        verified: false,
                        message: "Invalid OTP"
                    }
                );
            }
        })
    } else {
        res.status(400).json({ message: "Invalid OTP" });
    }
})

module.exports = router;

// const sgMail = require('@sendgrid/mail');
// const API_KEY = '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'

// sgMail.setApiKey(API_KEY);

// const message = {
//     to: 'pavanshegde93@gmail.com',
//     from : {
//        name: 'Pavan S',
//        email: 'pavanshegde93@gmail.com'
//     },
//     subject: 'Hello from Pavan',
//     text: 'Hello from Pavan',
//     html: '<h1>Hello from Pavan</h1>'
// };

// sgMail
// .send(message)
// .then((res) => console.log('Email sent...'))
// .catch((err) => console.log(err.message));

// const accountSid = process.env.ACCOUNT_SID;
// const authToken = process.env.AUTH_TOKEN;
// const client = require('twilio')(accountSid, authToken);

// client.verify.services('MyApp')
//              .verifications
//              .create({to: 'pavanshegde93@foo.com', channel: 'email'})
//              .then(verification => console.log(verification.sid));