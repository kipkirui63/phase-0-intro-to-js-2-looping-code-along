// Code your solutions in this file
function writeCards(names) {
  const thankYouMessages = [];
  for (let i = 0; i < names.length; i++) {
    thankYouMessages.push(`Thank you, ${names[i]}, for the wonderful surprise gift!`);
    console.log(`Thank you, ${names[i]}, for the wonderful surprise gift!`)
  }
  return thankYouMessages;
}

writeCards(names);

function countDown(number) {
  let i= number;
  while (i >= 0) {
    console.log(i); i--;
  }
  return number;
}
countDown(10)

// // Export the functions to make them accessible from other files
// module.exports = {
//   writeCards,
//   countDown,
// };

// const gifts = ["teddy bear","drone","doll"];

// function writeGifts(gifts) {
//   for (let i = 0; i < gifts.length; i++) {
//     console.log(`Wrapped ${gifts[i]} and added a bow!`);
//     debugger;
//   }
//   return gifts;
// }

// writeGifts(gifts);