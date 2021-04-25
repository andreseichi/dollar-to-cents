const input = document.querySelector("input");
input.addEventListener("input", converter);

let quarterValue = document.querySelector(".quarter-value");
let dimeValue = document.querySelector(".dime-value");
let nickelValue = document.querySelector(".nickel-value");
let pennyValue = document.querySelector(".penny-value");

let totalCentsText = document.querySelector(".total-cents-text");
function converter() {
  let valueTotal = Math.round(document.querySelector("input").value.replace(',', '.') * 100);
  if (typeof valueTotal === "number" && valueTotal >= 0) {
    const quarter = Math.floor(valueTotal / 25);
    let remainder = valueTotal % 25;
    const dime = Math.floor(remainder / 10);
    remainder = remainder % 10;
    const nickel = Math.floor(remainder / 5);
    remainder = remainder % 5;
    const penny = Math.floor(remainder);

    totalCentsText.innerHTML = `${valueTotal} ¢`;
    // let coinsDiv = document.querySelector(".coins");
    // coinsDiv.innerHTML = `<h2 class="quarter">${quarter} quarter (25 ¢)</h2>
    // <h2 class="dime">${dime} dime (10 ¢)</h2>
    // <h2 class="nickel">${nickel} nickel (5 ¢)</h2>
    // <h2 class="penny">${penny} penny (1 ¢)</h2>`;

    quarterValue.innerHTML = `${quarter}`;
    dimeValue.innerHTML = `${dime}`;
    nickelValue.innerHTML = `${nickel}`;
    pennyValue.innerHTML = `${penny}`;
  } else {
    console.log("n é numero");
    totalCentsText.innerHTML = `It's not a number`;
  }
}
