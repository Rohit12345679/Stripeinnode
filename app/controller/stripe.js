const Publishable_Key = 'process.env.Public_key'
const stripe = require('stripe')('stripekey');

exports.render=(req,res)=>{
    res.render('Home', {
        key: Publishable_Key
     })
}
exports.createCharge=(req,res)=>{
 stripe.customers.create({
      email: req.body.stripeEmail,
     source: req.body.stripeToken,
      name: 'Rohit',
      address: {
          line1: 'TC',
          postal_code: '05544',
          city: 'Siddharth nagar',
          state: 'Uttar Pradesh',
          country: 'India',
      }
  })
  .then((customer) => {

      return stripe.charges.create({
          amount: 5300,     // Charing Rs 53
          description: 'seraphic',
          currency: 'INR',
          customer: customer.id
      });
  })
  .then((charge) => {
      res.send("Success")  // If no error occurs
  })
  .catch((err) => {
      res.send(err)       // If some error occurs
  });
}