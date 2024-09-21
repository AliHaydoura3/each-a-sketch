const container = document.getElementById("container");

generateGrid(16);

const button = document.getElementById("button");

button.addEventListener("click", (event) => {
  const userInput = prompt("Enter a number between 1 and 100");
  if (
    isNaN(userInput) ||
    userInput === null ||
    userInput < 1 ||
    userInput > 100
  ) {
    alert("Invalid Input!");
  } else {
    generateGrid(userInput);
  }
});

function generateGrid(squareNumber) {
  container.innerHTML = "";

  for (let i = 0; i < squareNumber; i++) {
    const row = document.createElement("div");
    row.className = "row";

    for (let i = 0; i < squareNumber; i++) {
      const square = document.createElement("div");
      square.className = "square";
      square.style.opacity = "1";
      row.appendChild(square);
    }

    container.appendChild(row);
  }

  const squares = document.getElementsByClassName("square");

  Array.from(squares).forEach((element) => {
    element.addEventListener("mouseenter", (event) => {
      event.target.style.backgroundColor = `rgb(${randomNumber()}, ${randomNumber()}, ${randomNumber()})`;
      event.target.style.opacity = "1";
    });

    element.addEventListener("mouseleave", () => {
      Array.from(squares).forEach((element) => {
        let currentOpacity = parseFloat(element.style.opacity);
        if (currentOpacity > 0) {
          element.style.opacity = (currentOpacity - 0.1).toString();
        }
      })
    });
  });
}

function randomNumber() {
  return Math.floor(Math.random() * 255);
}
