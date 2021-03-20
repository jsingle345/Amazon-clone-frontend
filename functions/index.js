const functions = require("firebase-functions");
const express = require("express"); 
const cors = require("cors"); 
const stripe = require("stripe")("sk_test_51IMklRGjCDw52nsY0byVwebpY1EIOMpoHcFWJubJFpZVFD5W8Oz3tB4KpBZvFWmKjWCudWuaJBojbv7GLgoACFHr00yzGPV7Xl")


// ****************** Essentially the Backend for this application ******************
// Building an express app and hosting it on a cloud function
// npm i express
// npm i cors 
// npm i stripe
//   ***** Need the secret key from the stripe dashboard under Developers in API keys
// in the command line type: "firebase emulators:start"  --- This will create an express server



// API

// - App config 
const app = express(); 

// - Middlewares 
app.use(cors({ origin: true })); 
app.use(express.json());

// - API routes 
app.get('/', (request, response) => response.status(200).send('hello world'))

// app.get('/joshua', (request, response) => response.status(200).send('This is amazing'))

app.post('/payments/create', async (request, response) => {
    const total = request.query.total; 

    const paymentIntent = await stripe.paymentIntents.create({
        amount: total,  // This is in subunits of the currency
        currency: 'usd'
    }); 

    // OK - Created
    response.status(201).send({
        clientSecret: paymentIntent.client_secret
    })
})

// - Listen command
exports.api = functions.https.onRequest(app)

// Example Endpoint 
// http://localhost:5001/clone-11c60/us-central1/api