
const calculateDiscountPrice = function(originalPrice, discountPercentage) {
    const discountAmount = (originalPrice * discountPercentage) / 100;
    const discountedPrice = originalPrice - discountAmount;
    return discountedPrice;
  };
  
  const calculateDiscountWithCallback = function(originalPrice, discountPercentage, callback) {
    const discountAmount = (originalPrice * discountPercentage) / 100;
    const discountedPrice = originalPrice - discountAmount;
    callback(discountedPrice);
  };
  

  const originalPrice1 = 100;
  const discountPercentage1 = 20;
  const discountedPrice1 = calculateDiscountPrice(originalPrice1, discountPercentage1);
  console.log(`Discounted Price 1: $${discountedPrice1}`);
  
  
  const originalPrice2 = 50;
  const discountPercentage2 = 10;
  calculateDiscountWithCallback(originalPrice2, discountPercentage2, function(discountedPrice2) {
    console.log(`Discounted Price 2: $${discountedPrice2}`);
  });
  
  
  const originalPrice3 = 75;
  const discountPercentage3 = 15;
  calculateDiscountWithCallback(originalPrice3, discountPercentage3, function(discountedPrice3) {
    console.log(`Discounted Price 3: $${discountedPrice3}`);

});
  