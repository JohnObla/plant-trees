const Stripe = require('stripe');
const stripe = Stripe(process.env.STRIPE_SECRET_KEY);

stripe.balance.retrieve(function (err, balance) {
  console.log(balance);
  console.log(err);
});
