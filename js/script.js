
function makePayment() {
    const PBFKey = "<Your Flutterwave public api key>"; 
    const txRef = create_UUID();
    const phone = document.getElementById('phone').value;
    const amount = document.getElementById('amount').value;
    const email = document.getElementById('email').value;
  

    FlutterwaveCheckout({
      public_key: PBFKey,
      tx_ref: txRef,
      amount: amount,
      currency: "UGX",
      country: "UG",
      payment_options: "card,mobilemoney,ussd",
      customer: {
        email: email,
        phone_number: phone,
        name: "ty",
      },
      callback: function (data) { 
        console.log(data);
      },
      customizations: {
        title: "",      //Title for your Bussiness
        description: "", //description of your Bussiness
        logo: "",        //include your Bss logo, it could be url to your logo
      },
    });
  }