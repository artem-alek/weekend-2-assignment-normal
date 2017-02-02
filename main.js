
// Question 1: Show me how to calculate the average price of all items.
// Answer: The average price is $23.63

var answer1Box = document.getElementById("answer1");

function priceAvg() {
  var avgNum = 0;

  for (var i = 0; i < items.length; i++) {
    avgNum += items[i].price;
  }
  avgNum = avgNum / items.length;
  return answer1Box.innerHTML = "The average price is $" + avgNum.toFixed(2) ;
}
