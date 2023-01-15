/**
 * Visa Card validation function. It validates both 13 digits and 16 digits visa card number
 * @param {number} cardNumber
 *
 * @returns string
 */

function isValidVisaCardNumber(cardNumber) {
  const visaCardRegex = /^(?:4[0-9]{12}(?:[0-9]{3})?)$/;

  if (visaCardRegex.test(cardNumber)) {
    return "Visa card number is valid";
  }

  return "invalid visa card number";
}

const testCard = isValidVisaCardNumber(4322556644552116);

console.log(testCard);
