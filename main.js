
// Question 1: Show me how to calculate the average price of all items.
// Answer: The average price is $23.63

var answer1Box = document.getElementById("answer1");

function priceAvg() {
  var avgNum = 0;
  for (var i = 0; i < items.length; i++) {
    avgNum += items[i].price;
  }
  avgNum = avgNum / items.length;
  return avgNum;
}

answer1Box.innerHTML = "The average price is $" + priceAvg().toFixed(2);

// Question 2: Show me how to get an array of items that cost between $14.00 and $18.00 USD.
// Answer:   1970s Coors Banquet Glass Beer Pitcher
//
//           The Three Broomsticks Customizable Beer Stein Mug, Harry Potter Inspired, hogsmeade village, harry potter gift, three broomsticks mug
//
//           Hand Painted Colorful Feather Glass



function costBetween() {
  var answer2Box = document.getElementById("answer2");
  for (var i = 0; i < items.length; i++) {
    if (items[i].price > 14.00 && items[i].price < 18.00) {
      answer2Box.innerHTML += "<p>" + items[i].title + "</p>";
    }
  }
}

costBetween();

//Question 3: Which item has a "GBP" currency code? Display it's name and price.
//Answers: 1970s Schlitz Malt Liquor Glass Beer Pitcher costs £18

var answer3Box = document.getElementById("answer3");

function currencyCode() {

  for (var i = 0; i < items.length; i++) {
    if (items[i].currency_code === "GBP") {
    var codeBank = items[i].title + " costs &pound;" + items[i].price;
    }
  }
  return codeBank;
}

answer3Box.innerHTML = currencyCode() ;

//Question 4: Display a list of all items who are made of wood.
//  Answers: SALE Mid Century Siesta Ware White Mug with Anchor - Set of 3 is made of wood.
//
//           Bottle cap catcher personalized. Man cave gift for him- Wooden Beer pub sign - Groomsmen wedding Gift is made of wood.
//
//           Medium Size, Welcome To Our Firepit-Where Friends And Marshmallows Get Toasted At The Same Time-Painted Wood Sign-Custom Colors is made of wood.
//
//           Magnetic Wall Mount Bottle Opener Barware Set - Stainless Steel or Black - Personalized if you like! is made of wood.
//
//           Engraved Pocket Knife, Personalized Groomsmen Gift, Ring Bearer Gift, Graduation Gift, 4 Knives is made of wood.

woodList();

function woodList() {
  //target key = "materials"
  var answers4Box = document.getElementById("answer4");
  for (var i = 0; i < items.length; i++) {
  if (items[i].materials.includes("wood")) {
    answers4Box.innerHTML += "<p>" + items[i].title + " is made of wood." + "</p>";
  }
  }
}

//Question 5: Which items are made of eight or more materials? Display the name, number of items and the items it is made of.
//Answer:
//   Qty of 2 Groomsmen Gift - Stainless Steel Personalized Bottle Opener - NO Capcatcher has 9 materials:
//   wall mount bottle opener
//   wedding
//   man cave
//   christmas gift
//   guy gift
//   fathers day
//   home bar
//   beer
//   bar
//
//   The Three Broomsticks Customizable Beer Stein Mug, Harry Potter  Inspired, hogsmeade village, harry potter gift, three broomsticks mug  has 13 materials:
//
//   glass
//   sandblast cabinet
//   vinyl
//   beer glass
//   pint glass
//   etched pint glass
//   etched glass
//   etched beer glass
//   16 oz pint
//   beer gift
//   etched harry potter glass
//   the three broomsticks glass
//   personalized harry potter glass

eightMats();

function eightMats() {
  var answers5Box = document.getElementById("answer5");
  for (var i = 0; i < items.length; i++) {
    if (items[i].materials.length >= 8) {
      answers5Box.innerHTML += items[i].title + " has " + items[i].materials.length + " materials:" ;
    for (var count = 0; count < items[i].materials[count].length; count++) {
      answers5Box.innerHTML += "<p>" + items[i].materials[count] + "</p";
      }
    }
  }

}

//Question 6: How many items were made by their sellers?
//Answer: 18 were made by their sellers

sellersNum();

function sellersNum() {
  var answer6Box = document.getElementById("answer6");
  var iDid = 0;
  for (var i = 0; i < items.length; i++) {
    if (items[i].who_made.includes("i_did")) {
      iDid++;
    }
  } answer6Box.innerHTML = iDid + " were made by their sellers.";
}
