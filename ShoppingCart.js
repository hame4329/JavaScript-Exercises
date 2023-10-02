//Declare variables to store the following information:
let ItemPrice = 45;
let ItemQuantity = 7;      
let ItemDiscount = 15;         
let Threshold = 10
let ItemTaxRate = 13; 
                  
let subtotal = ItemPrice * ItemQuantity;
let discount =0;

//apply the discount
 //let discount = 0;
 //if (subtotal >10){
   // discount = discount=subtotal * itemDiscount;
 //} else {
   // discount = discount=0
 //}

 discount = subtotal>10? subtotal*ItemDiscount/100:0;

 let itemTax= subtotal- discount* (ItemTaxRate/100);
 let Total = subtotal-discount+itemTax;


 console.log(`original price: ${ItemPrice}
 itemQuantity: ${ItemQuantity}
sub total: ${subtotal}
discount amount: ${ItemDiscount}
sub total after discount: ${discount}
tax amount: ${itemTax} 
total cost: ${Total}`);


