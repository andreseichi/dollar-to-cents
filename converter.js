const input = document.querySelector("input");
input.addEventListener("input", converter);

function converter() {
  let value = parseFloat(document.querySelector("input").value);
  if (typeof value === "number" && value >= 0) {
    const valueDollar = value * 100;

    const quarter = Math.floor(valueDollar / 25);
    let remainder = valueDollar % 25;

    const dime = Math.floor(remainder / 10);
    remainder = remainder % 10;

    const nickel = Math.floor(remainder / 5);
    remainder = remainder % 5;

    const penny = Math.floor(remainder);

    let totalCentsText = document.querySelector('.total-cents-text');
    totalCentsText.innerHTML = `${Math.round(valueDollar)} ¢`;
    let coinsDiv = document.querySelector(".coins");

    coinsDiv.innerHTML = `<h2 class="quarter">${quarter} quarter (25 ¢)</h2>
    <h2 class="dime">${dime} dime (10 ¢)</h2>
    <h2 class="nickel">${nickel} nickel (5 ¢)</h2>
    <h2 class="penny">${penny} penny (1 ¢)</h2>`;

    // let quarterHTML = document.querySelector(".quarter");
    // quarterHTML.innerHTML = quarter;
  }
  // console.log('n é numero')
}
