/**
 * This function calculates the price of goods after sales tax and shipping
 * for the list of most commonly sold items in our digital storefront.
 *
 * This code currently works (and passes all tests),
 * but it is hard to read due to repetitive code.
 *
 * Can you refactor it by writing functions that reduce repetition?
 */
function previewFullPrice(salesTax, shippingPrice) {
  const shirtPrice = 30.99;
  const sweatshirtPrice = 40.99;
  const smallPosterPrice = 15.99;
  const largePosterPrice = 22.99;
  const mugPrice = 12.99;

  let finalPrice = function(product) {
    productPriceAfterTax = product * (1 + salesTax);
    productPriceAfterShipping = productPriceAfterTax + shippingPrice;
    return productPriceAfterShippingRounded = productPriceAfterShipping.toFixed(2);
  }

return [
    finalPrice(shirtPrice),
    finalPrice(sweatshirtPrice),
    finalPrice(smallPosterPrice),
    finalPrice(largePosterPrice),
    finalPrice(mugPrice),
  ];
}
module.exports = previewFullPrice;
