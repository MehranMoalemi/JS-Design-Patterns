function calculateOrderTotal(order) {
    // Calculate the order total
    let total = 0;
    for (let i = 0; i < order.items.length; i++) {
      total += order.items[i].price * order.items[i].quantity;
    }
  
    // Apply any discounts or promotions
    if (order.promoCode === 'DISCOUNT10') {
      total *= 0.9;
    }
  
    // Calculate the tax
    const taxRate = 0.05;
    const tax = total * taxRate;
  
    // Add the tax to the total
    total += tax;
  
    return total;
}
  

//using SRP

function calculateOrderTotal(order) {
    const subtotal = calculateSubtotal(order.items);
    const discount = calculateDiscount(order.promoCode, subtotal);
    const tax = calculateTax(subtotal, order.shippingAddress.state);
    const total = subtotal - discount + tax;
    return total;
  }
  
  function calculateSubtotal(items) {
    let subtotal = 0;
    for (let i = 0; i < items.length; i++) {
      subtotal += items[i].price * items[i].quantity;
    }
    return subtotal;
  }
  
  function calculateDiscount(promoCode, subtotal) {
    if (promoCode === 'DISCOUNT10') {
      return subtotal * 0.1;
    }
    return 0;
  }
  
  function calculateTax(subtotal, state) {
    const taxRates = {
      'CA': 0.09,
      'NY': 0.08,
      'TX': 0.07,
    };
    const taxRate = taxRates[state] || 0;
    const tax = subtotal * taxRate;
    return tax;
  }