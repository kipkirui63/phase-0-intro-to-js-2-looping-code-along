// Code your solutions in this file
function writeCards(names) {
  const thankYouMessages = [];
  for (let i = 0; i < names.length; i++) {
    thankYouMessages.push(`Thank you, ${names[i]}, for the wonderful gift!`);
  }
  return thankYouMessages;
}

function countDown(number) {
  while (number >= 0) {
    console.log(number);
    number--;
  }
}

// Export the functions to make them accessible from other files
module.exports = {
  writeCards,
  countDown,
};
