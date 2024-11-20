class Cart {
  constructor() {
    // Selecting the DOM elements
    this.plusButtons = Array.from(document.querySelectorAll(".bi-plus-circle"));
    this.minusButtons = Array.from(document.querySelectorAll(".bi-dash-circle"));
    this.trashButtons = Array.from(document.querySelectorAll(".bi-trash-fill"));
    this.heartButtons = Array.from(document.querySelectorAll(".bi-bag-heart-fill"));
    this.cards = Array.from(document.querySelectorAll(".card"));
    this.totalPriceElement = document.querySelector("#TotalP");

    // Initializing event listeners
    this.initializeEventListeners();
  }

  // Method to add event listeners for all buttons
  initializeEventListeners() {
    this.plusButtons.forEach((button) => {
      button.addEventListener("click", () => this.incrementQuantity(button));
    });

    this.minusButtons.forEach((button) => {
      button.addEventListener("click", () => this.decrementQuantity(button));
    });

    this.trashButtons.forEach((button, index) => {
      button.addEventListener("click", () => this.removeCard(index));
    });

    this.heartButtons.forEach((button) => {
      button.addEventListener("click", () => this.toggleHeart(button));
    });
  }

  // Method to increment quantity
  incrementQuantity(button) {
    button.previousElementSibling.innerHTML++;
    this.updateTotalPrice();
  }

  // Method to decrement quantity
  decrementQuantity(button) {
    if (button.nextElementSibling.innerHTML > 1) {
      button.nextElementSibling.innerHTML--;
    }
    this.updateTotalPrice();
  }

  // Method to remove card
  removeCard(index) {
    this.cards[index].remove();
    this.updateTotalPrice();
  }

  // Method to toggle heart color
  toggleHeart(button) {
    if (button.style.color === "red") {
      button.style.color = "black";
    } else {
      button.style.color = "red";
    }
  }

  // Method to calculate and update total price
  updateTotalPrice() {
    const prices = Array.from(document.querySelectorAll(".unit-price"));
    const quantities = Array.from(document.querySelectorAll(".badge"));
    let totalP = 0;

    for (let i = 0; i < prices.length; i++) {
      totalP += parseFloat(prices[i].innerHTML) * parseInt(quantities[i].innerHTML);
    }

    this.totalPriceElement.innerHTML = totalP;
  }
}

// Instantiate the Cart class
const cart = new Cart();
