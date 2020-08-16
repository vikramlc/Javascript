function productDescription(strings, productName, productPrice) {
  console.log(strings);
  console.log(productName);
  console.log(productPrice);
  let priceCategory = 'cheap';

  if (productPrice > 20) {
    priceCategory = 'fair';
  }

  return `${strings[0]}${productName}${strings[1]}${productPrice}${strings[2]}`;
}

const productName = 'Javascript';
const productPrice = 223.21;

const productOutput = productDescription`This product (${productName}) is ${productPrice}.`;
console.log(productOutput);