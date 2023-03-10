class PayPal {
    pay(amount) {
      console.log(`Paying ${amount} using PayPal.`);
    }
  }
  
  class Stripe {
    makePayment(amountInDollars) {
      console.log(`Paying ${amountInDollars} using Stripe.`);
    }
  }
  
  class AuthorizeDotNet {
    createTransaction(amount) {
      console.log(`Creating a transaction for ${amount} using Authorize.net.`);
    }
  }
  
  class PaymentAdapter {
    constructor(paymentProvider) {
      this.paymentProvider = paymentProvider;
    }
  
    pay(amount) {
      if (this.paymentProvider instanceof PayPal) {
        this.paymentProvider.pay(amount);
      } else if (this.paymentProvider instanceof Stripe) {
        const amountInDollars = amount / 100;
        this.paymentProvider.makePayment(amountInDollars);
      } else if (this.paymentProvider instanceof AuthorizeDotNet) {
        this.paymentProvider.createTransaction(amount);
      } else {
        throw new Error("Unsupported payment provider.");
      }
    }
  }
  
  // usage example
  const paypal = new PayPal();
  const stripe = new Stripe();
  const authorizeDotNet = new AuthorizeDotNet();
  
  const paymentAdapter1 = new PaymentAdapter(paypal);
  const paymentAdapter2 = new PaymentAdapter(stripe);
  const paymentAdapter3 = new PaymentAdapter(authorizeDotNet);
  
  paymentAdapter1.pay(100); // "Paying 100 using PayPal."
  paymentAdapter2.pay(2000); // "Paying 20 using Stripe."
  paymentAdapter3.pay(500); // "Creating a transaction for 500 using Authorize.net."