const input = document.querySelector("input");
input.addEventListener("input", converter);

function converter() {
  let value = parseFloat(document.querySelector("input").value);
  if (typeof value === "number" && value >= 0) {
    // Total of Dollar
    const valueDollar = value * 100;

    const quarter = Math.floor(valueDollar / 25);
    let remainder = valueDollar % 25;

    const dime = Math.floor(remainder / 10);
    remainder = remainder % 10;

    const nickel = Math.floor(remainder / 5);
    remainder = remainder % 5;

    const penny = Math.floor(remainder);

    console.log(this.value);

    let coinsDiv = document.querySelector(".coins");

    coinsDiv.innerHTML = `<h2 class="quarter">${quarter}</h2>
    <h2 class="dime">${dime}</h2>
    <h2 class="nickel">${nickel}</h2>
    <h2 class="penny">${penny}</h2>`;

    // let quarterHTML = document.querySelector(".quarter");
    // quarterHTML.innerHTML = quarter;
  }
  // console.log('n é numero')
}
