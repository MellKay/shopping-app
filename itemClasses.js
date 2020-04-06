class Item {
  constructor(name, description, price, maxBuy, img) {
    this.name = name;
    this.description = description;
    this.price = price;
    this.maxBuy = maxBuy;
    this.img = img;
  }
}

class Beer extends Item {
  constructor() {
    super("Bottled Beer", "Ice cold beer to see you through the weekend.");
  }
}
