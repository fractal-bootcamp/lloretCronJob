const nodemailer = require('nodemailer');

// Create a transporter object using your Gmail account and App Password
const transporter = nodemailer.createTransport({
    service: 'gmail', // Use 'hotmail' or 'outlook' if you're using a different service
    auth: {
        user: 'brunolloretfuentes@gmail.com', // Your Gmail address
        pass: 'tojk cgzq eszp whib' // The App Password you generated
    }
});

// Define the email options
const mailOptions = {
    from: 'brunolloretfuentesl@gmail.com', // Your Gmail address
    to: 'caballoret@gmail.com', // Recipient's email address
    subject: 'Test Email from Nodemailer',
    text: 'This is a test email sent from a Node.js script using an App Password!'
};

// Send the email
transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
        return console.log(`Error: ${error}`);
    }
    console.log(`Email sent: ${info.response}`);
});
